<template>
  <div >
    <b-container class="pr-3 pt-5 pb-5 pl-3  mt--50 pb-1 bg-white card shadow" style="border:1px solid #dcdcdc">
      <b-row>
        <b-col>
            Login
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
             <b-input-group  class="mt-3">
                <b-form-input v-model="login.Email"  placeholder="Username"></b-form-input>
                <b-input-group-append>
                    <b-button variant="light" style="border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;border-right:1px solid #dcdcdc"><span class="fa fa-user"></span></b-button>
                    
                </b-input-group-append>
            </b-input-group>
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
            <b-input-group  class="mt-3">
                <b-form-input v-model="login.password" type="password" placeholder="Password"></b-form-input>
                <b-input-group-append>
                    <b-button variant="light" style="border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;border-right:1px solid #dcdcdc"><span class="fa fa-lock"></span></b-button>
                    
                </b-input-group-append>
            </b-input-group>
        </b-col>
        
      </b-row>
       <b-row class="mt-2">
        <b-col>
            <b-button variant="primary" pill class="pr-4 pl-4" @click="validate_auth()">Sign In</b-button>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import {RepositoryFactory} from '../Repository/RepositoryFactory'
// const UsersRepository = RepositoryFactory.get('user_repository')

import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
import Repository from '../Repository/Repository'

export default {
  name: 'SecondaryHeader',
    data() {
        return {
          login:{
          Email: 'admin@fadv.com',
          password:'@@admin123!@#'
        }
      }
    },
    methods:{
      async validate_auth() {
        
        if(this.login.Email!='' && this.login.password!='') {
          var response= await UserRepository.authenticatelogin(this.login)
          .catch(error => {
              console.log(error.response)
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
          });
          if(response!=null) {
            Repository.defaults.headers.Authorization = `Bearer ${response.data.data.Token}`;

            this.$store.commit("setLoggedUser",response.data.data)
          }     

        }
        else {
          this.$store.commit('setNotifications',{message:'Make sure to fill in the fields',type:'error'})
        }
      
        
      },
    }
}
</script>

<style  scoped>
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
.visitor-text{
    position: absolute;
    top: 3.5rem;
    left: 5rem;
}

.page-text{
    position: absolute;
    top: 3.5rem;
    left: 4rem;
}



}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.visitor-text{
    position: absolute;
    top: 3.6rem;
    left: 10rem;
}

.page-text{
    position: absolute;
    top: 3.7rem;
    left: 9rem;
}
}
</style>

