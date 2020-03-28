<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      
      <div class="mt-2 text-left text-primary">
       <h4 >Eric Poon</h4> 
      </div>
      <div class="text-left mt-3">
        <div >
           <h6 > <b>Refund to Wallet</b> </h6>
        </div>
        <div class="col-md-4 pl-0">
          <input placeholder="Enter refund amount" class=" rounded form-control col-md-12">
        </div>
        <div class="col-md-4 pl-0 mt-2" style="corder-ra">
          <input placeholder="Enter Order ID" class="rounded form-control col-md-12">
        </div>
        <div class="mt-1">
          <b-button v-b-modal.modal-1 size="sm" pill variant="primary">Refund</b-button>
        </div>
       </div>

       <div class="text-left mt-4">
          <h6> <b>User Type</b> </h6>
          <p>Employer</p>
       </div>

       <div class="text-left mt-3">
          <h6> <b>Currency</b> </h6>
          <p>AUD</p>
       </div>

       <div class="text-left mt-3">
          <h6> <b>Company Information</b> </h6>
          <p>Comapny Name:  Nexsoft Technolgy Ltd</p>
          <p>Industry Type: : Information Technology Business</p>
          <p>Business Registration No:</p>

       </div>

       <div class="text-left mt-3">
          <h6> <b>User Information</b> </h6>
          <p>First Name: Eric</p> 
          <p>Last Name: Poon</p> 
          <p>Email: ericpoon@nexsoftech.com</p> 
          <p>Mobile: +92377473833</p> 
       </div>

       <div class="text-left mt-3">
          <h6> <b>Registered Addess</b> </h6>
           <p>Country: Hong Kong</p> 
          <p>Address: 1703 Lemmi Centre, 50 Hoi Yuen Road</p> 
          <p>City:</p> 
          <p>State:</p> 
          <p>Postcode/Zipcode:</p> 
       </div>

       <div class="text-left mt-3">
          <h6> <b>Billing Address</b> </h6>
          <p>Country: Hong Kong</p> 
          <p>Address: 1703 Lemmi Centre, 50 Hoi Yuen Road</p> 
          <p>City:</p> 
          <p>State:</p> 
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
            <b>$200</b> 
           </b-col>
        </b-row>
        <b-row>
           <b-col style="align-self:center" class="text-right mt-1">
             <span style="font-size:13px;"> <b>Order ID</b> </span> 
           </b-col>
           <b-col style="font-size:20px;" class="text-main">
            <b>13545</b> 
           </b-col>
        </b-row>
        <b-row class="mt-3">
           <b-col class="text-right" >
             <b-button pill variant="primary" class="pr-4 pl-4"> Confirm</b-button>
           </b-col>
           <b-col  class="text-main">
             <b-button pill variant="light" class="pr-4 pl-4" style="border:1px solid #dcdcdc"> Cancel</b-button>
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

export default {
    name: 'Users',
    components: {
        Header,
        SecondaryHeader
    },
    created(){
      this.totalRows = this.items.length

    },
    data() {
        return {
           items: [
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'yes',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Enabled' },
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'yes',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Enabled' },
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'yes',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Disabled' },
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'pending',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Disabled' },
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'yes',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Enabled' },
            { user_id: 40, name: 'Rockon', company_name: 'Macdonald',email:'ronda@gmail.com',currency:'USD',wallet:'434',email_vertification:'yes',phone_no:'5484694559',signup_date:'8-11-2019 13:59',status:'Enabled' },

          ],
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
          totalRows: 1,
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
