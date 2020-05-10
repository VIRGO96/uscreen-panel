<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      <div class="mt-2 text-left text-primary">
       <h4>Filter</h4> 
      </div>
      <div>
        <b-row>
           <b-col md="6" cols="12" class="text-md-left">
             <div class="d-block d-md-flex">
                <!-- <b-form-checkbox class="self-center"> -->
                Package
              <!-- </b-form-checkbox> -->
              <select v-model="search_params.package" name="" placeholder="Select Package" class="mt-xs-1 ml-md-5 form-control" id="">
                <option value="1">Employer - Criminal Only</option>
                <option value="2">Employer - Bronze</option>
                <option value="3">Employer - Silver</option>
                <option value="4">Employer - Gold</option>
                <option value="5">Employer - Platinum</option>
                <option value="6">Employer - Diamond</option>
                <option value="7">Individual - Criminal Only</option>
                <option value="8">Individual - Bronze</option>
                <option value="9">Individual - Silver</option>
                <option value="10">Individual - Gold</option>
                <option value="11">Individual - Platinum</option>
                <option value="12">Individual - Diamond</option>
              </select>
               <div class="ml-1">
                <b-button variant="primary" @click="searchIt('package')">Search</b-button>
              </div>
             </div>

           </b-col>
        </b-row>
        <!-- <b-row class="mt-2">
           <b-col md="8" cols="12" class="text-md-left">
             <div class="d-block d-md-flex">
                <b-form-checkbox class="mt-xs-1 self-center">
                Order Date From
              </b-form-checkbox>
              <div class="cols-12 ml-md-5 mt-xs-1">
              <b-form-datepicker style=" border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center mt-xs-1" >to</div>
              <div class="ml-1 mt-xs-1">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
             </div>

           </b-col>
        </b-row> -->
        <b-row class="mt-2">
           <b-col cols="12" md="8" class="text-md-left">
             <div class="d-block d-md-flex">
                <!-- <b-form-checkbox class="mt-xs-1 self-center"> -->
                Completion Date From
              <!-- </b-form-checkbox> -->
              <div class="ml-md-3 mt-xs-1">
              <b-form-datepicker v-model="search_params.completion_date_to" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center mt-xs-1" >to</div>
              <div class="ml-1 mt-xs-1">
              <b-form-datepicker v-model="search_params.completion_date_from" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1">
                <b-button variant="primary" @click="searchIt('completion-date')">Search</b-button>
              </div>
             </div>

           </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col cols="12" md="8" class="text-md-left">
             <div class="d-block d-md-flex">
                <!-- <b-form-checkbox class="mt-xs-1 self-center"> -->
                Payment Date From
              <!-- </b-form-checkbox> -->
              <div class="ml-md-3 mt-xs-1">
              <b-form-datepicker v-model="search_params.payment_date_from" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center mt-xs-1" >to</div>
              <div class="ml-1 mt-xs-1">
              <b-form-datepicker v-model="search_params.payment_date_to" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1">
                <b-button variant="primary" @click="searchIt('payment-date')">Search</b-button>
              </div>
             </div>

           </b-col>
        </b-row>
        <b-row>
           <b-col md="6" cols="12" class="mt-2 text-md-left">
             <div class="d-md-flex d-lg-flex d-none">               
              <!-- <b-form-checkbox class="self-center">
              </b-form-checkbox> -->
              <div style="width:145px;" class="self-center">Payment Type</div>
                <select name="" v-model="search_params.payment_type" placeholder="Select Package" class="form-control" id="">
                  <option value="1">Online</option>
                  <option value="2">Bank Transfer</option>
                  <option value="3">Invoice</option>
                  
                </select>
                <div class="ml-1">
                  <b-button variant="primary" @click="searchIt('payment-type')">Search</b-button>
                </div>
              </div>

           </b-col>
           <b-col md="6" cols="12" class="mt-2 text-center">
             <div class="d-md-none d-lg-none d-block">  
              <!-- <b-form-checkbox class="mt-xs-1 self-center"> -->
                Payment Type
              <!-- </b-form-checkbox> -->
                <select name="" placeholder="Select Package" class="mt-xs-1 form-control" id="">
                  <option value="1">Online</option>
                  <option value="2">Bank Transfer</option>
                  <option value="3">Invoice</option>
                  
                </select>
              </div>

           </b-col>
        </b-row>
        <b-row>
           <b-col md="6" class="mt-2 text-left">
             <div class="d-none d-md-flex">
            <!-- <b-form-checkbox class="self-center">
              </b-form-checkbox> -->
              <div style="width:145px;" class="self-center">Status</div>
              <select name="" v-model="search_params.status_id" placeholder="Select Status" class="form-control" id="">
                <option value="1">Ready</option>
                <option value="2">Pending</option>
                <option value="3">Refund</option>
                <option value="4">Paid</option>
                <option value="5">Expired</option>
                <option value="6">Done</option>
          
              </select>
                <div class="ml-1">
                  <b-button variant="primary" @click="searchIt('order-status')">Search</b-button>
                </div>
             </div>

           </b-col>
           <b-col md="6" cols="12" class="mt-2 text-center">
             <div class="d-md-none d-lg-none d-block">  
              <b-form-checkbox class="mt-xs-1 self-center">
                Status
              </b-form-checkbox>
                  <select name="" v-model="search_params.status_id" placeholder="Select Status" class="form-control" id="">
                <option value="1">Ready</option>
                <option value="2">Pending</option>
                <option value="3">Refund</option>
                <option value="4">Paid</option>
                <option value="5">Expired</option>
                <option value="6">Done</option>
          
              </select>
          
              </div>

           </b-col>
        </b-row>
      </div>
      <div class="mt-2 text-md-left d-flex">
        <div class="self-center">
        Search
        </div>
        <div class="ml-3">
        <input v-model="search_params.search" class=" border-hids form-control col-md-12">
        </div>
        <div class="ml-1">
          <b-button variant="primary" @click="searchIt('search')">Search</b-button>
        </div>
      </div>
       <div class="mt-2 mb-2 text-md-right">
        <b-button  variant="primary" @click="clearfilters()" class="pr-4 mr-3 pl-4">Clear Filters</b-button>
        <download-csv
          class   = "btn btn-primary"
          :data   = "allorders"
          name    = "orders.csv">      
          Excel
          </download-csv>
      </div>
      <div>
        <b-table :responsive="true"  striped hover :fields="fields" :items="view_able_orders"        
          :current-page="currentPage"
          :per-page="perPage">
            <template v-slot:head(OrderId)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(PackageServiceName)="data">
              <span class="smalls">Package Name</span>
            </template>
            <template v-slot:head(Candidate)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(CandidateStatusName)="">
              <span class="smalls">Candidate Status</span>
            </template>
            
            <template v-slot:head(UserId)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(CurrencyCode)="data">
              <span class="smalls">Currency</span>
            </template>
            <template v-slot:head(TotalAmount)="data">
              <span class="smalls">Prices</span>
            </template>
            <template v-slot:head(PaymentTypeName)="data">
              <span class="smalls">Payment Type</span>
            </template>
            <template v-slot:head(PaymentDate)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(LastCreated)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(status)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(OrderStatusName)="data">
              <span class="smalls">Order Status</span>
            </template>
            
            <!-- Cells -->
            <template v-slot:cell(OrderId)="data">
                <span class="smalls">{{data.item.OrderNumber}} </span> 
            </template>
            
            <template v-slot:cell(PackageServiceName)="data">
              <span class="smalls">{{ data.item.PackageServiceName }}</span>
            </template>
            <template v-slot:cell(Candidate)="data">
              <span class="smalls">{{ data.item.FirstName }} {{data.item.LastName}}</span>
            </template>
            <template v-slot:cell(CandidateStatusName)="data">
              <b-badge v-if="data.item.CandidateStatusName=='Pending Payment'" class="bg-white" style="background-color:#0071ce;color:#0071ce;border:1px solid #0071ce" pill>{{data.item.CandidateStatusName}}</b-badge>
              <b-badge v-else class="bg-white" style="background-color:#90d940;border:1px solid #90d940;color:#90d940" pill>{{data.item.CandidateStatusName}}</b-badge>

            </template>
            <template v-slot:cell(UserId)="data">
              <span class="smalls">{{ data.item.UserId }}</span>
            </template>
            <template v-slot:cell(CurrencyCode)="data">
              <span class="smalls">{{ data.item.CurrencyCode }}</span>
            </template>
            <template v-slot:cell(TotalAmount)="data">
              <span class="smalls">{{ data.item.TotalAmount }}</span>
            </template>
            <template v-slot:cell(PaymentTypeName)="data">
              <span class="smalls">{{ data.item.PaymentTypeName }}</span>
            </template>
            <template v-slot:cell(PaymentDate)="data">
              <span class="smalls">{{ data.item.PaymentDate!=null ? data.item.PaymentDate.split('T')[0]:'' }}</span>
            </template>
            <template v-slot:cell(LastCreated)="data">
              <span class="smalls">{{ data.item.LastCreated.split('T')[0] }}</span>
            </template>
            <template v-slot:cell(OrderStatusName)="data">
              <b-badge @click="viewAction(data.item)" v-if="data.item.OrderStatusName=='Paid'" :class="data.item.OrderStatusName=='Paid' ? '':'bg-white'" :style="data.item.OrderStatusName=='Paid' ? `background-color:#90d940`:`border:1px solid #90d940;color:#90d940`" pill>{{data.item.OrderStatusName}}</b-badge>
              <b-badge  @click="viewAction(data.item)" v-else class="bg-white"  style="background-color:#0071ce;color:#0071ce;border:1px solid #0071ce" pill>{{data.item.OrderStatusName}}</b-badge>
             <!-- v-else-if="data.item.OrderStatusName=='Ready'" -->
              <!-- <b-badge  @click="viewAction(data.item)" v-else-if="data.item.OrderStatusName=='Refund'" class="bg-white"  style="background-color:#0071ce;color:#0071ce;border:1px solid #0071ce" pill>Refund</b-badge> -->

              <!-- <b-badge  v-b-modal.actions v-else-if="data.item.status=='pending'" class="text-orange bg-white" style="cursor:pointer;border:1px solid #d87128;" pill>{{ data.item.status }}</b-badge> -->
              <!-- <span  class="float-right ml-2 fa fa-eye text-primary"></span> -->

              <!-- <b-button class="p-1" :variant="data.item.status=='Enabled' ? 'success':'outline-success'" size="sm" pill></b-button> -->
            </template>
               
              
          </b-table>
          <div class="float-right" >
          <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="my-0"
              pills
          ></b-pagination>
          </div>
      </div>

    </b-container>
    <b-modal id="actions" hide-header hide-footer>
      <b-container>
      <h5 class="text-primary pt-3 pb-4">Actions</h5>
        <b-row v-if="focused_order.OrderStatusName=='Ready'">
           <b-col >
            <b-button block pill variant="primary" class="pr-4 pl-4" v-b-modal.order-confirm @click="$bvModal.hide('actions')"> Confirm Payment</b-button>

           </b-col>
        </b-row>
        <b-row class="mt-3">
           <b-col class="mt-1">
             <b-button block pill variant="primary" class="pr-4 pl-4" v-b-modal.order-cancel  @click="$bvModal.hide('actions')"> Cancel Order</b-button>
           </b-col>
        </b-row>
        <b-row class="mt-3">
          
           <b-col  class="text-main text-center">
             <b-button pill variant="light" class="pr-5 pl-5 " style="border:1px solid #dcdcdc" @click="$bvModal.hide('actions')"> Back</b-button>
           </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <b-modal id="order-cancel" hide-header hide-footer>
      <b-container>
      <h5 class="text-primary pt-3">Confirm Cancel Order ?</h5>
      <p class="text-muted">Upon cancellation , an email will be sent  to the user to advice that order has been cancelled.</p>
      <b-row class="mt-3 pt-4 pb-3">
           <b-col class="text-right" >
             <b-button pill variant="primary" class="pr-4 pl-4" @click="cancelOrder('CANCELLED')"> Confirm</b-button>
           </b-col>
           <b-col  class="text-main">
             <b-button pill variant="light" class="pr-4 pl-4" @click="$bvModal.hide('order-cancel')" style="border:1px solid #dcdcdc"> Cancel</b-button>
           </b-col>
      </b-row>
      </b-container>
    </b-modal>
    <b-modal id="order-confirm" hide-header hide-footer>
      <b-container>
      <h5 class="text-primary pt-3">Confirm Settlement?</h5>
      <p class="text-muted">Upon confirmation , an email will be sent  to the user to advice that payment has been received.</p>
      <b-row class="mt-3 pt-4">
           <b-col >
             <h6><b>Transaction ID</b> </h6>
           </b-col>
           <b-col  class="text-main">
          <input v-model="confirm_settlement_obj.PaymentReference" placeholder="Transaction ID" class="rounded form-control col-md-12">
           </b-col>
      </b-row>
      <b-row class="mt-1">
           <b-col class="text-left" >
             <h6><b>Re-enter Transaction ID</b> </h6>
           </b-col>
           <b-col  class="text-main">
          <input placeholder="Confirm Transaction ID" v-model="retransaction_id" class="rounded form-control col-md-12">
           </b-col>
      </b-row>
      <b-row class="mt-1">
           <b-col class="text-left" >
             <h6><b>Payment Date</b> </h6>
           </b-col>
           <b-col  class="text-main">
              <input v-model="confirm_settlement_obj.PaymentDate" style="border-radius:1rem;"  type="date" class="form-control"/>

              <!-- <b-form-datepicker v-model="confirm_settlement_obj.PaymentDate" style="border-radius:1rem;" ></b-form-datepicker> -->
           </b-col>
      </b-row>
      <b-row class="mt-1">
           <b-col class="text-left" >
             <h6><b>Order ID</b> </h6>
           </b-col>
           <b-col  class="text-main">
          <input placeholder="Enter Order ID" v-model="confirm_settlement_obj.OrderId" class="rounded form-control col-md-12">
           </b-col>
      </b-row>
       <b-row class="mt-3">
           <b-col class="text-right" >
            <b-spinner v-if="isLoad" variant="primary" label="Spinning"></b-spinner>
             <b-button v-else pill variant="primary" class="pr-4 pl-4" @click="confirmSettlement()"> Confirm</b-button>
           </b-col>
           <b-col  class="text-main">
             <b-button pill variant="light" class="pr-4 pl-4" style="border:1px solid #dcdcdc" @click="$bvModal.hide('order-confirm')"> Cancel</b-button>
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
    name: 'Orders',
    components: {
        Header,
        SecondaryHeader
    },
    watch:{
      view_able_orders(){
          this.totalRows = this.view_able_orders.length

      },
      allorders(){
          this.totalRows = this.allorders.length
          this.view_able_orders=this.allorders

      }
    },
    computed:{
      ...mapGetters(['allorders','allusers']),
      // filtered_orders(){
      //   if(this.status_filter!=''){
      //     const filtered=this.allorders.filter(item=>item.OrderStatusName==this.status_filter)
      //     return filtered.filter(item=>item.PackageServiceName.toLowerCase().includes(this.search_filter.toLowerCase()) ||
      //     item.Candidate.FirstName.toLowerCase().includes(this.search_filter.toLowerCase()) ||
      //     item.Candidate.LastName.toLowerCase().includes(this.search_filter.toLowerCase()))

      //   }
      //   else{
      //   // return this.allorders.filter(item=>item.PackageServiceName.toLowerCase().includes(this.search_filter.toLowerCase()))
      //     return this.allorders.filter(item=>
      //     item.Candidate.FirstName.toLowerCase().includes(this.search_filter.toLowerCase()) ||
      //     item.Candidate.LastName.toLowerCase().includes(this.search_filter.toLowerCase()))


      //   }
         
      // }
    },
    created(){
      this.totalRows = this.allorders.length
      this.fetchOrders()
      this.view_able_orders=this.allorders


    },
    methods:{
      async searchIt(arg){
        if(arg=='payment-date'){
            console.log(this.search_params.payment_date_to)
            console.log(this.search_params.payment_date_from)
            let {data}=await OrderRepository.gePaymenttorders({from:this.search_params.payment_date_from,to:this.search_params.payment_date_to})
            console.log(data.data.PageData.length)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]


            }

        }
        else if(arg=='completion-date'){
            let {data}=await OrderRepository.getCompletionorders({from:this.search_params.completion_date_from,to:this.search_params.completion_date_to})
            console.log(data.data.PageData)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]


            }

        }
        else if(arg=='payment-type') {
            let {data}=await OrderRepository.getPaymentOrders({PaymentTypeId:this.search_params.payment_type})
            console.log(data.data.PageData)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]
            }

        }
        else if(arg=='order-status') {
            let {data}=await OrderRepository.getStatusOrders({OrderStatusId:this.search_params.status_id})
            console.log(data.data.PageData)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]
            }

        }
        else if(arg=='search') {
            let {data}=await OrderRepository.getSearchOrders({search:this.search_params.search})
            console.log(data.data.PageData)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]
            }

        }
        else if(arg=='package'){
          let {data}=await OrderRepository.getPackageOrders({PackageServiceId:this.search_params.package})
            console.log(data.data.PageData)
            if(data.data.PageData.length>0){
                this.view_able_orders=data.data.PageData
            }
            else{
                  this.$store.commit('setNotifications',{message:'No search results',type:'error'})
                  this.view_able_orders=[]
            }
        }
        
      },
      async confirmSettlement() {
       
          if(this.focused_order.OrderNumber==this.confirm_settlement_obj.OrderId){
            if(this.retransaction_id==this.confirm_settlement_obj.PaymentReference){
                this.isLoad=true
                this.confirm_settlement_obj.OrderKey=this.focused_order.OrderKey
                this.confirm_settlement_obj.UserKey=this.focused_order.UserKey
                let {data}= await OrderRepository.edit_order(this.confirm_settlement_obj)
                .catch(error => {
                console.log(error)
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                    this.isLoad=false

                });
                if(data.status=='Success'){
                  this.$bvModal.hide('order-confirm')
                  this.fetchOrders()
                  this.$store.commit('setNotifications',{message:'Order confirmed successfully',type:'success'})
                }
                else{
                  this.$store.commit('setNotifications',{message:'Order not confirmed',type:'error'})
                }
                this.isLoad=false

            }
            else{
                this.$store.commit('setNotifications',{message:'Transaction Id and Confirmed Transaction id are not same',type:'error'})
            }
              
          }
          else{
                this.$store.commit('setNotifications',{message:'Order id not matching to the selected order',type:'error'})

          }

          

        // }
        // else {
        //   this.$store.commit('setNotifications',{message:'Order not found',type:'error'})

        // }

      },
      viewAction(item){
        this.focused_order=item
        this.order_obj.OrderKey=item.OrderKey
        this.order_obj.UserKey=item.UserKey
        this.$bvModal.show('actions')
      },
      clearfilters(){
        this.search_params={
            payment_type:'',
            order_status:'',
            payment_date_to:'',
            payment_date_from:'',
            completion_date_to:'',
            completion_date_from:'',
            
          }
          this.view_able_orders=this.allorders

      },
      async cancelOrder(type){
        this.order_obj.Type=type
        let {data}=await OrderRepository.edit_order(this.order_obj)
        .catch(error => {
        console.log(error)
            this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            this.isLoad=false

        });
        
        if(data.status=='Success'){
          this.$bvModal.hide('order-cancel')
          this.fetchOrders()
        this.$store.commit('setNotifications',{message:'Order cancelled successfully',type:'success'})

        }
        else{
        this.$store.commit('setNotifications',{message:'Order not cancelled',type:'error'})

        }

      },
      async fetchOrders(){
        let {data}=await OrderRepository.getorders()
        this.$store.commit("setAllOrders",data.data.PageData)
      }
    },
    data() {
        return {
          view_able_orders:[],
          search_params:{
            payment_type:'',
            order_status:'',
            payment_date_to:'',
            payment_date_from:'',
            completion_date_to:'',
            completion_date_from:'',
            status_id:'',
            search:'',
            package:''
            
          },
          retransaction_id:'',
          focused_order:'',
          isLoad:false,
          search_filter:'',
          confirm_settlement_obj:{
            OrderId:'',
            PaymentReference:'',
            PaymentDate:'',
            OrderKey:'',
            UserKey:'',
            Type:'INVOICE' 
          },
          order_obj:{
           Type: '',
           OrderKey:'',
           UserKey:'',
          },
         fields: [
          // A regular column
          'OrderId',
          'PackageServiceName',
          'Candidate',
          'CurrencyCode',
          'LastCreated',
          'PaymentDate',
          'CandidateStatusName',
          'PaymentTypeName',    
          'OrderStatusName'      

        ],
        // 'TotalAmount',

        //   'status',
        // 'Candidate',
        //   'UserId',
        //   'CandidateStatusName',
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
            
        }
    }
}
</script>

<style scoped>
.breadcrumb {
  padding-left:0rem !important;
  padding-top:0rem !important
}
.rounded{
 border-radius: 1.25rem !important
}
</style>
