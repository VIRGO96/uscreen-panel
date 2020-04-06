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
        <b-table striped hover :responsive="true" :fields="fields" :items="items"        
          :current-page="currentPage"
          :per-page="perPage">
            <template v-slot:head(user_id)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(name)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(company_name)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(email)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(currency)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(wallet)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(email_vertification)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(phone_no)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(signup_date)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(status)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <!-- Cells -->
            <template v-slot:cell(user_id)="data">
                <span class="smalls">{{data.item.user_id}} </span> 
            </template>
            <template v-slot:cell(name)="data">
              <span class="smalls">{{ data.item.name }}</span>
            </template>
            <template v-slot:cell(company_name)="data">
              <span class="smalls">{{ data.item.company_name }}</span>
            </template>
            <template v-slot:cell(email)="data">
              <span class="smalls">{{ data.item.email }}</span>
            </template>
            <template v-slot:cell(currency)="data">
              <span class="smalls">{{ data.item.currency }}</span>
            </template>
            <template v-slot:cell(wallet)="data">
              <span class="smalls">{{ data.item.wallet }}</span>
            </template>
            <template v-slot:cell(email_vertification)="data">
              <span :class="[data.item.email_vertification=='yes' ? 'text-success':'text-danger', 'smalls']">{{ data.item.email_vertification }}</span>
            </template>
            <template v-slot:cell(phone_no)="data">
              <span class="smalls">{{ data.item.phone_no }}</span>
            </template>
            <template v-slot:cell(signup_date)="data">
              <span class="smalls">{{ data.item.signup_date }}</span>
            </template>
            <template v-slot:cell(status)="data">
              <!-- <div class="bg-success rounded p-1 text-white">{{ data.item.status }}</div> -->
              <!-- <b-badge  style="" pill>{{ data.item.status }}</b-badge> -->
              <b-badge :class="data.item.status=='Enabled' ? '':'bg-white'" :style="data.item.status=='Enabled' ? `background-color:#90d940`:`border:1px solid #90d940;color:#90d940`" pill>{{ data.item.status }}</b-badge>
              <router-link to="/user-details">
                <span class="float-right ml-2 fa fa-eye text-primary"></span>
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
          active_user:'Employers',
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
.breadcrumb {
  padding-left:0rem !important;
  padding-top:0rem !important

}


</style>
