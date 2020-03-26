<template>
  <div class="home">
    <Header msg="Welcome to Your Vue.js App"/>
    <SecondaryHeader msg="Welcome to Your Vue.js App"/>
    <b-container class="card bg-white mt-2 pb-5 pt-2">
      <div class="mt-2 text-left text-primary">
       <h4 >Filter</h4> 
      </div>
      <div>
        <b-row>
           <b-col md="6" class="text-left">
             <div class="d-flex d-md-flex">
                <b-form-checkbox class="self-center">
                Package
              </b-form-checkbox>
              <select name="" placeholder="Select Package" class="ml-5 form-control" id="">
                <option value="Company A">Package A</option>
                <option value="Company B">Package B</option>

              </select>
             </div>

           </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col md="8" class="text-left">
             <div class="d-flex d-md-flex">
                <b-form-checkbox class="self-center">
                Order Date From
              </b-form-checkbox>
              <div class="ml-5">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center" >to</div>
              <div class="ml-1">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
             </div>

           </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col md="8" class="text-left">
             <div class="d-flex d-md-flex">
                <b-form-checkbox class="self-center">
                Completion Date From
              </b-form-checkbox>
              <div class="ml-3">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
              <div class="ml-1 self-center" >to</div>
              <div class="ml-1">
              <b-form-datepicker style="border-radius:1rem;" ></b-form-datepicker>
              </div>
             </div>

           </b-col>
        </b-row>
        <b-row>
           <b-col md="8" class="mt-2 text-left">
             <div class="d-flex d-md-flex">
            <b-form-checkbox class="self-center">
              </b-form-checkbox>
              <div style="width:145px;" class="self-center">Package Type</div>
              <select name="" placeholder="Select Package" class="form-control" id="">
                <option value="Company A">Payment A</option>
                <option value="Company B">Payment B</option>
              </select>
             </div>

           </b-col>
        </b-row>
        <b-row>
           <b-col md="8" class="mt-2 text-left">
             <div class="d-flex d-md-flex">
            <b-form-checkbox class="self-center">
              </b-form-checkbox>
              <div style="width:145px;" class="self-center">Status</div>
              <select name="" placeholder="Select Status" class="form-control" id="">
                <option value="Company A">status A</option>
                <option value="Company B">status B</option>
              </select>
             </div>

           </b-col>
        </b-row>
         <!-- <b-row class="mt-2">
           <b-col md="6" class="text-left">
             <div class="d-flex d-md-flex">
                <b-form-checkbox style="align-self:center;">
                Email Verified
              </b-form-checkbox>
              
             </div>

           </b-col>
        </b-row> -->
      </div>
      <div class="mt-2 text-left d-flex">
        <div class="self-center">
        Search
        </div>
        <div class="ml-3">
        <input class="form-control col-md-12">
        </div>
      </div>
       <div class="mt-2 mb-2 text-right">
        <b-button pill variant="primary" class="pr-4 pl-4">Excel</b-button>
      </div>
      <div>
        <b-table striped hover :fields="fields" :items="items"        
          :current-page="currentPage"
          :per-page="perPage">
            <template v-slot:head(order_id)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(package_name)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(candidate_name)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(user_id)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(currency)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(price)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(payment_type)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(payment_completion)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(order_date)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <template v-slot:head(status)="data">
              <span class="smalls">{{ data.label }}</span>
            </template>
            <!-- Cells -->
            <template v-slot:cell(order_id)="data">
                <span class="smalls">{{data.item.order_id}} </span> 
            </template>
            <template v-slot:cell(package_name)="data">
              <span class="smalls">{{ data.item.package_name }}</span>
            </template>
            <template v-slot:cell(candidate_name)="data">
              <span class="smalls">{{ data.item.candidate_name }}</span>
            </template>
            <template v-slot:cell(user_id)="data">
              <span class="smalls">{{ data.item.user_id }}</span>
            </template>
            <template v-slot:cell(currency)="data">
              <span class="smalls">{{ data.item.currency }}</span>
            </template>
            <template v-slot:cell(price)="data">
              <span class="smalls">{{ data.item.price }}</span>
            </template>
            <template v-slot:cell(payment_type)="data">
              <span class="smalls">{{ data.item.payment_type }}</span>
            </template>
            <template v-slot:cell(payment_completion)="data">
              <span class="smalls">{{ data.item.payment_completion }}</span>
            </template>
            <template v-slot:cell(order_date)="data">
              <span class="smalls">{{ data.item.order_date }}</span>
            </template>
            <template v-slot:cell(status)="data">
              <!-- <div class="bg-success rounded p-1 text-white">{{ data.item.status }}</div> -->
              <!-- <b-badge  style="" pill>{{ data.item.status }}</b-badge> -->
              <b-badge v-if="data.item.status=='done'" :class="data.item.status=='done' ? '':'bg-white'" :style="data.item.status=='done' ? `background-color:#90d940`:`border:1px solid #90d940;color:#90d940`" pill>{{ data.item.status }}</b-badge>
              <b-badge v-else-if="data.item.status=='cancelled'" class="bg-white"  style="background-color:#0071ce;color:#0071ce;border:1px solid #0071ce" pill>{{ data.item.status }}</b-badge>
              <b-badge v-else-if="data.item.status=='pending'" class="text-orange bg-white" style="border:1px solid #d87128;" pill>{{ data.item.status }}</b-badge>
              
              <!-- <b-button class="p-1" :variant="data.item.status=='Enabled' ? 'success':'outline-success'" size="sm" pill></b-button> -->
            </template>
               
              
          </b-table>
          <div class="float-right" >
          <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              class="my-0"
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
    name: 'Home',
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
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'pending' },
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'done' },
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'done' },
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'cancelled' },
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'cancelled' },
            { order_id: 40, package_name: 'Employed Credit', candidate_name: 'Peter',user_id:'41',currency:'USD',price:'$434',payment_type:'Online',payment_completion:'17/19/2019',order_date:'8-11-2019 13:59',status:'cancelled' },

          ],
         fields: [
          // A regular column
          'order_id',
          'package_name',
          'candidate_name',
          'user_id',
          'currency',
          'price',
          'order_date',
          'payment_completion',
          'payment_type',
          'status',

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
