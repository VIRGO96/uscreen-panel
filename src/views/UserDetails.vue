<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      
      <div class="mt-2 text-left text-primary">
       <h4 >{{selected_user.FirstName}} {{selected_user.LastName}}</h4> 
      </div>
      <div class="text-left mt-3">
        <div >
           <h6 > <b>Refund to Wallet</b> </h6>
        </div>
        <div class="col-md-4 pl-0">
          <input placeholder="Enter refund amount" v-model="refund_obj.Amount" class=" rounded form-control col-md-12">
        </div>
        <div class="col-md-4 pl-0 mt-2" style="corder-ra">
          <input placeholder="Enter Order ID" v-model="refund_obj.OrderId" class="rounded form-control col-md-12">
        </div>
        <div class="mt-1">
          <b-button v-b-modal.modal-1 size="sm" pill variant="primary">Refund</b-button>
        </div>
       </div>

       <div class="text-left mt-4">
          <h6> <b>User Type</b> </h6>
          <p>{{selected_user.UserRoleCode}}</p>
       </div>

       <div class="text-left mt-3">
          <h6> <b>Currency</b> </h6>
          <p>{{selected_user.CurrencyCode}}</p>
       </div>

       <div class="text-left mt-3">
          <h6> <b>Company Information</b> </h6>
          <p>Comapny Name:  {{selected_user.CompanyName}}</p>
          <p>Industry Type: : {{selected_user.IndustryTypeId}}</p>
          <p>Business Registration No: {{selected_user.BusinessRegistrationNo}}</p>

       </div>


       <div class="text-left mt-3">
          <h6> <b>User Information</b> </h6>
          <p>First Name: {{selected_user.FirstName}}</p> 
          <p>Middle Name: {{selected_user.MiddleName}}</p> 
          <p>Last Name: {{selected_user.LastName}}</p> 

          <p>Email: {{selected_user.Email}}</p> 
          <p>Mobile: {{selected_user.MobileCode}}-{{selected_user.MobileNumber}}</p> 
       </div>

       <div class="text-left mt-3">
          <h6> <b>Registered Addess</b> </h6>
           <p>Country: {{selected_user.UserAddress.CountryName}}</p> 
          <p>Address: {{selected_user.UserAddress.AddressName}}</p> 
          <p>City: {{selected_user.UserAddress.CityName}} </p> 
          <p>State: {{selected_user.UserAddress.ProvinceName}}</p> 
          <p>Postcode/Zipcode:</p> 
       </div>

       <div class="text-left mt-3">
          <h6> <b>Billing Address</b> </h6>
          <p>Country: {{selected_user.BusinessAddress.CountryName}} </p> 
          <p>Address:{{selected_user.BusinessAddress.AddressName}}</p> 
          <p>City: {{selected_user.BusinessAddress.CityName}}</p> 
          <p>State: {{selected_user.BusinessAddress.ProvinceName}}</p> 
          <p>Postcode/Zipcode:</p> 

       </div>
     
    </b-container>
    <b-modal id="modal-1" hide-header hide-footer>
      <b-container class="p-4">
      <h5 class="text-primary">Confirm Refund ?</h5>
      <p class="text-muted">Upon confirmation , an email will be sent  to the user to advice that payment has been received.</p>
        <b-row class="mt-2">
           <b-col style="align-self:center" class="text-right">
            <span  style="font-size:13px;"> <b>Refund amount</b> </span>  
           </b-col>
           <b-col style="font-size:20px;" class="text-main">
            <b>${{refund_obj.Amount}}</b> 
           </b-col>
        </b-row>
        <b-row>
           <b-col style="align-self:center" class="text-right mt-1">
             <span style="font-size:13px;"> <b>Order ID</b> </span> 
           </b-col>
           <b-col style="font-size:20px;" class="text-main">
            <b>{{refund_obj.OrderId}}</b> 
           </b-col>
        </b-row>
        <b-row class="mt-3">
           <b-col class="text-right" >
             <b-button pill variant="primary" class="pr-4 pl-4" @click="refundOrder()"> Confirm</b-button>
           </b-col>
           <b-col  class="text-main">
             <b-button pill variant="light" class="pr-4 pl-4" style="border:1px solid #dcdcdc" @click="$bvModal.hide('modal-1')"> Cancel</b-button>
           </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SecondaryHeader from '@/components/SecondaryHeader.vue'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
const OrderRepository = RepositoryFactory.get('order_repository')
import {mapGetters} from 'vuex'
export default {
    name: 'UserDetails',
    props:['UserKey'],
    components: {
        Header,
        SecondaryHeader
    },
    computed:{
      ...mapGetters(['allorders'])
    },
    created(){
      console.log(this.UserKey)
      this.fetchUserDetails()
      

    },
    methods:{
      async refundOrder() {
        // console.log(this.refund_obj)
        // this.$store.commit('setNotifications',{message:'Order created successfully',type:'success'})

        let tempkey=this.allorders.find(item=>item.OrderId==this.refund_obj.OrderId)
        console.log(tempkey)
        if(tempkey!=null){
          this.refund_obj.OrderKey=tempkey.OrderKey
          let {data}=await OrderRepository.edit_order(this.refund_obj)
        console.log(data)
        if(data.status=='Success'){
          console.log("h")
          this.$store.commit("setNotifications",{message:'Refund completed successfully',type:'success'})
          this.$bvModal.hide('modal-1')
        }
        else{
            this.$store.commit('setNotifications',{message:'Order not refunded',type:'error'})

        }

      }
      else{
          this.$store.commit('setNotifications',{message:'Order not found',type:'error'})

      }


      },
      async fetchUserDetails() {
        let {data}=await UserRepository.getsingleuser(this.UserKey)
        console.log(data)
        this.selected_user=data.data.PageData[0]
        this.refund_obj.UserKey=this.selected_user.UserKey
      }
    },
    data() {
        return {
          selected_user:'',
          refund_obj:{
           Type: 'REFUND',
           OrderId:'',
           OrderKey:'',
           UserKey:'',
           Amount:''
          },
          
         fields: [
          // A regular column
          'user_id',
          'name',
          'company_name',
          'email',
          'currency',
          'wallet',
          'email_vertification',
          'phone_no',
          'signup_date',
          'status'

        ],
        currentPage: 1,
        perPage: 5,
            
        }
    }
}
</script>

<style scoped>
.rounded{
 border-radius: 1.25rem !important
}
.breadcrumb {
  padding-left:0rem !important;
  padding-top:0rem !important

}

p{
  margin:0rem !important
}
</style>
