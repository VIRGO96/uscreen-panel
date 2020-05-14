<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      <div class="text-md-left">
        <b-button @click="active_user='Employers'"  pill :variant="active_user=='Employers' ? 'primary':'outline-primary'" class="pl-5 pr-5" >Employers</b-button>
        <b-button @click="active_user='Individuals';fetchUsers(1)" class="mt-xs-1 ml-md-2 pl-5 pr-5" pill :variant="active_user=='Individuals' ? 'primary':'outline-primary'" >Individuals</b-button>
      </div>
      <div class="mt-2 text-md-left text-primary">
       <h4 >Filtering</h4> 
      </div>
      <div>
        <b-row>
           <b-col md="6" class="text-md-left">
             <div class="d-block d-md-flex">
                <b-form-checkbox v-model="search_params.company_flag" class="mt-xs-1 self-center">
                Company
              </b-form-checkbox>
              <select v-model="search_params.company_name" name="" class="ml-md-5 mt-xs-1  form-control" id="">
                <option  v-for="(item,i) in companies" :key="i" :value="item.CompanyName">{{item.CompanyName}}</option>

              </select>
             </div>

           </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col md="11" class="text-mdleft">
             <div class="d-block d-md-flex">
                <b-form-checkbox v-model="search_params.sign_up_flag" class="mt-xs-1 self-center">
                Sign Up From
              </b-form-checkbox>
              <div class="ml-md-3 mt-xs-1">
              <b-form-datepicker v-model="search_params.FromDate" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center mt-xs-1" >to</div>
              <div class="ml-1 mt-xs-1">
              <b-form-datepicker  v-model="search_params.ToDate" style="border-radius:1rem;" ></b-form-datepicker>
              </div>
             </div>

           </b-col>
        </b-row>
         <b-row class="mt-2">
           <b-col md="6" class="text-md-left">
             <div class="d-block d-md-flex">
                <b-form-checkbox class="mt-xs-1" v-model="search_params.email_flag" style="align-self:center;">
                Email Verified
              </b-form-checkbox>
              
             </div>

           </b-col>
        </b-row>
      </div>
      <div class="mt-2 text-left d-flex">
         <b-form-checkbox class="mt-xs-1" v-model="search_params.search_flag"  style="align-self:center;">

          </b-form-checkbox>
        <!-- v-model="search_params.sign_up_flag" -->
        <div class="self-center">
        Search
        </div>
        <div class="ml-3">
        <input v-model="search_params.search"  class=" border-hids form-control col-md-12">
        </div>
      </div>
       <div class="mt-2 mb-2 text-md-right">
          <b-button size="sm" variant="primary" class="mr-3" @click="searchIt()">Search</b-button>
          <b-button size="sm" variant="primary" @click="clearfilter()" class="pr-4 mr-3 pl-4">Clear Filters</b-button>
          <b-button size="sm" variant="primary" @click="downloadExcel()" class="pr-4 mr-3 pl-4">Excel</b-button>

        </div>
      <div>
        <b-table v-if="orderLoad==false" striped hover :responsive="true" :fields="active_user=='Employers' ? fields:individual_fields" :items="view_able_users">
            <template v-slot:head(UserId)="data">
              <span class="ex-smalls">ID</span>
            </template>
            <template v-slot:head(UserName)="data">
              <span class="ex-smalls">Name</span>
            </template>
            <template v-slot:head(CompanyName)="data">
              <span class="ex-smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(Email)="data">
              <span class="ex-smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(CurrencyCode)="data">
              <span class="ex-smalls">Currency</span>
            </template>
            <template v-slot:head(UserWalletAmount)="data">
              <span class="ex-smalls">Wallet</span>
            </template>
            <template v-slot:head(IsVerified)="data">
              <span class="ex-smalls">Email Verification</span>
            </template>
            <template v-slot:head(MobileNumber)="data">
              <span class="ex-smalls">Phone No	</span>
            </template>
            <template v-slot:head(LastCreated)="data">
              <span class="ex-smalls">Signup Date</span>
            </template>
            <template v-slot:head(StatusName)="data">
              <span class="ex-smalls">Status</span>
            </template>
            <!-- Cells -->
            <template v-slot:cell(UserId)="data">
                <span class="smalls">{{data.item.UserId}} </span> 
            </template>
            <template v-slot:cell(UserName)="data">
              <span class="smalls">{{ data.item.FirstName }} {{ data.item.LastName }}</span>
            </template>
            <template v-slot:cell(CompanyName)="data">
              <span class="smalls">{{ data.item.CompanyName }}</span>
            </template>
            <template v-slot:cell(Email)="data">
              <span class="smalls">{{ data.item.Email }}</span>
            </template>
            <template v-slot:cell(CurrencyCode)="data">
              <span class="smalls">{{ data.item.CurrencyCode }}</span>
            </template>
            <template v-slot:cell(UserWalletAmount)="data">
              <span class="smalls">{{ data.item.UserWalletAmount }}</span>
            </template>
            <template v-slot:cell(IsVerified)="data">
              <span :class="[data.item.IsVerified==1 ? 'text-success':'text-danger', 'smalls']">{{ data.item.IsVerified==1 ? 'yes':'pending'}}</span>
            </template>
            <template v-slot:cell(MobileNumber)="data">
              <span class="smalls">{{ data.item.MobileNumber }}</span>
            </template>
            <template v-slot:cell(LastCreated)="data">
              <span class="smalls">{{ data.item.LastCreated.split('T')[0] }}</span>
            </template>
            <template v-slot:cell(StatusName)="data">
                    <b-badge :class="data.item.StatusName=='Active' ? '':'bg-white'" :style="data.item.StatusName=='Active' ? `background-color:#90d940`:`border:1px solid #90d940;color:#90d940`"  pill>{{ data.item.StatusName }}</b-badge>
           <router-link :to="{name:'UserDetails',params:{UserKey:data.item.UserKey}}">
                <!-- float-right ml-2   -->
                <span class="fa fa-eye text-primary"></span>
              </router-link>
              <!-- <b-button class="p-1" :variant="data.item.status=='Enabled' ? 'success':'outline-success'" size="sm" pill></b-button> -->
            </template>
               
              
        </b-table>
        <div v-else class="text-center">
              <b-spinner  variant="primary" label="Spinning"></b-spinner>
          </div> 
        <div class="float-right" >
          <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              @change="changeUserItems"
              :per-page="perPage"
              class="my-0"
              pills
          ></b-pagination>
        </div>
      </div>

    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SecondaryHeader from '@/components/SecondaryHeader.vue'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
import {mapGetters} from 'vuex'
export default {
    name: 'Users',
    components: {
        Header,
        SecondaryHeader
    },
    watch:{
      fileurl(){
        clearTimeout(this.timers);

      },
    },
    computed:{
      ...mapGetters(['employer','users','allusers','userpage','companies']),

    },
    created(){
      this.fetchUsers(1)

    },
    methods:{
      clearfilter(){
        this.fetchUsers(1);
        this.search_params={
          FromDate:'',
          ToDate:'',
          search:'',
          company_name:'',
          sign_up_flag:false,
          search_flag:false,
          email_flag:false,
          company_flag:false
        }

      },
     async downloadExcel(){
        let resp=await UserRepository.userExport()
        this.timers=setTimeout(async () => {
        let {data}=await UserRepository.userExportFile(resp.data.data.ExportKey)
           if(data.data.File!=null){
             this.fileurl=data.data.File
             window.open(this.fileurl)
           }
          
        }, 1000);
          
      },
      changeUserItems(){
        if (this.search_params.search_flag==false && this.search_params.email_flag==false
            && this.search_params.sign_up_flag==false && this.search_params.company_flag==false ){
              this.fetchUsers(this.currentPage)
          }
        else{
                this.searchIt()
        }
        
      },
      async searchIt(){
          if (this.search_params.search_flag==false && this.search_params.email_flag==false
          && this.search_params.sign_up_flag==false && this.search_params.company_flag==false) {
          this.$store.commit('setNotifications',{message:'No search filter activated',type:'error'})

          }
          else{

          
          this.orderLoad=true

          var link_url=''
           
          if(this.search_params.sign_up_flag==true){
            link_url=link_url+`&FromDate=${this.search_params.FromDate}&ToDate=${this.search_params.ToDate}`
          }
          if(this.search_params.search_flag==true){
            link_url=link_url+`&s=${this.search_params.search}`

          }
          if(this.search_params.email_flag==true){
            link_url=link_url+`&IsVerified=1`

          }
          if(this.search_params.company_flag==true){
            link_url=link_url+`&CompanyName=${this.search_params.company_name}`

          }
          if(this.active_user=='Employers'){
            link_url=link_url+`&UserRoleId=3`

          }
          if(this.active_user=='Individuals'){
            link_url=link_url+`&UserRoleId=2`
            
          }
          console.log(link_url)
          let {data}=await UserRepository.searchAll({pagenum:this.currentPage,url:link_url})
          this.totalRows=data.data.HitsTotal
          this.view_able_users=data.data.PageData
         
          }
          this.orderLoad=false
          
        },
        async fetchUsers(pagenum) {
          this.orderLoad=true
          if(this.active_user=='Employers'){
          let {data}=await UserRepository.getusers({pagenum:pagenum,id:3})
          // console.log(data)            
          // this.$store.commit("setAllUsers",{PageData:data.data.PageData,PageTotal:data.data.PageTotal})
            this.view_able_users=data.data.PageData
            this.totalRows=data.data.HitsTotal
          }
          else if(this.active_user=='Individuals'){
          let {data}=await UserRepository.getusers({pagenum:pagenum,id:2})
          // console.log(data)            
          // this.$store.commit("setAllUsers",{PageData:data.data.PageData,PageTotal:data.data.PageTotal})
            this.view_able_users=data.data.PageData
            this.totalRows=data.data.HitsTotal
          }
         this.orderLoad=false

        }
    },
    data() {
        return {
          orderLoad:false,
          active_user:'Employers',
         fields: [
          // A regular column
          'UserId',
          'UserName',
          'CompanyName',
          'Email',
          'CurrencyCode',
          'UserWalletAmount',
          'IsVerified',
          'MobileNumber',
          'LastCreated',
          'StatusName'

        ],
        search_params:{
          FromDate:'',
          ToDate:'',
          search:'',
          company_name:'',
          sign_up_flag:false,
          search_flag:false,
          email_flag:false,
          company_flag:false
        },
        view_able_users:[],
        individual_fields: [
          // A regular column
          'UserId',
          'UserName',
          'Email',
          'CurrencyCode',
          'UserWalletAmount',
          'IsVerified',
          'MobileNumber',
          'LastCreated',
          'StatusName'

        ],
        timers:'',
        fileurl:'',
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


</style>
