<template>
  <div class="home">
    <LoginHeader />
    <b-row>
       <b-col md="4" class="offset-md-2">
        <LoginSecondaryHeader/>

       </b-col>
       <b-col>
         <b-container class="  mt--50" >
          <b-row>
            <b-col md="12" class="text-left text-white">
               <h3>FADV Management</h3> 
            </b-col>
            <b-col md="12" class="mt-3">
                <img align="left" src="../assets/logo.png" alt="">
            </b-col>
            
          </b-row>
          
    </b-container>

       </b-col>
    </b-row>

  </div>
</template>

<script>
// @ is an alias to /src
import LoginHeader from '@/components/LoginHeader.vue'
import LoginSecondaryHeader from '@/components/LoginSecondaryHeader.vue'

export default {
    name: 'Users',
    components: {
        LoginHeader,
        LoginSecondaryHeader
    }
}
</script>

<style scoped>
.breadcrumb {
  padding-left:0rem !important;
  padding-top:0rem !important

}


</style>
