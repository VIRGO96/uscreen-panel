<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    <!-- <b-container class="pr-3 pt-3  pl-3  pb-1 bg-white card shadow" style="margin-top:-50px;border:1px solid #dcdcdc">
      <b-row>
         <b-col>
           <div class="text-left text-light-gray"> <h5>Members</h5> </div>
           <div>
            <b-breadcrumb class="bg-white">
              <b-breadcrumb-item href="">
                <span class="fa fa-home"></span>
              </b-breadcrumb-item>
              <b-breadcrumb-item href="" >UI</b-breadcrumb-item>
              <b-breadcrumb-item active>List Groups</b-breadcrumb-item>

            </b-breadcrumb>
           </div>
         </b-col>
         <b-col md="2">
           <div style="margin-top:-30px; !important">
              <apexchart type="bar" height="100" :options="chartOptions" :series="series"></apexchart>
          </div>
         </b-col>
          <b-col md="2">
            <div style="margin-top:-30px; !important">
                   <apexchart type="bar" height="100" :options="secchartOptions" :series="series"></apexchart>
            </div>
         </b-col>
      </b-row>
    </b-container> -->
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      <div class="text-md-left">
        <b-button @click="active_user='Employers'"  pill :variant="active_user=='Employers' ? 'primary':'outline-primary'" class="pl-5 pr-5" >Employers</b-button>
        <b-button @click="active_user='Individuals'" class="mt-xs-1 ml-md-2 pl-5 pr-5" pill :variant="active_user=='Individuals' ? 'primary':'outline-primary'" >Individuals</b-button>
      </div>
      <div class="mt-2 text-md-left text-primary">
       <h4 >Filtering</h4> 
      </div>
      <div>
        <b-row>
           <b-col md="6" class="text-md-left">
             <div class="d-block d-md-flex">
                <b-form-checkbox class="mt-xs-1 self-center">
                Company
              </b-form-checkbox>
              <select name="" class="ml-md-5 mt-xs-1  form-control" id="">
                <option value="Company A">company A</option>
                <option value="Company B">company B</option>

              </select>
             </div>

           </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col md="11" class="text-mdleft">
             <div class="d-block d-md-flex">
                <b-form-checkbox class="mt-xs-1 self-center">
                Sign Up From
              </b-form-checkbox>
              <div class="ml-md-3 mt-xs-1">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center mt-xs-1" >to</div>
              <div class="ml-1 mt-xs-1">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
             </div>

           </b-col>
        </b-row>
         <b-row class="mt-2">
           <b-col md="6" class="text-md-left">
             <div class="d-block d-md-flex">
                <b-form-checkbox class="mt-xs-1" style="align-self:center;">
                Email Verified
              </b-form-checkbox>
              
             </div>

           </b-col>
        </b-row>
      </div>
      <div class="mt-2 text-left d-flex">
        <div class="self-center">
        Search
        </div>
        <div class="ml-3">
        <input class=" border-hids form-control col-md-12">
        </div>
      </div>
       <div class="mt-2 mb-2 text-md-right">
        <b-button pill variant="primary" class="pr-4 pl-4">Excel</b-button>
      </div>
      <div>
        <b-table striped hover :responsive="true" :fields="fields" :items="active_user=='Employers' ? employer:users"        
          :current-page="currentPage"
          :per-page="perPage">
            <template v-slot:head(UserKey)="data">
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
            <template v-slot:cell(UserKey)="data">
                <span class="smalls">{{data.item.UserKey}} </span> 
            </template>
            <template v-slot:cell(UserName)="data">
              <span class="smalls">{{ data.item.UserName }}</span>
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
                <!-- float-right ml-2  -->
                <span class="fa fa-eye text-primary"></span>
              </router-link>
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
    computed:{
      ...mapGetters(['employer','users'])
    },
    created(){
      this.totalRows = this.active_user=='Employers' ? this.employer.length:this.users.length
      this.fetchUsers()

    },
    methods:{
        async fetchUsers(){
        let {data}=await UserRepository.getusers()
        console.log(data)
        this.$store.commit("setAllUsers",data.PageData)
        }
    },
    data() {
        return {
          active_user:'Employers',
          
         fields: [
          // A regular column
          'UserKey',
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
