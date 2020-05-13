<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import nativeToast from 'native-toast'
import { RepositoryFactory } from './Repository/RepositoryFactory'
const OrderRepository = RepositoryFactory.get('order_repository')


export default {
  computed:{
    ...mapGetters(['notifications','loggedUser'])
  },
  created(){

      console.log(localStorage.getItem("loggedUser"))
      if(localStorage.getItem("loggedUser")!=null){
        console.log("yahs")
        this.$store.commit("setLoggedUser",JSON.parse(localStorage.getItem("loggedUser")))
        this.fetchOrders()

      }
      else{
        console.log("mahh")
      }
  },
  methods:{
    async fetchOrders(){
        let {data}=await OrderRepository.getorders(1)
        console.log(data)
        this.$store.commit("setAllOrders",{PageData:data.data.PageData,HitsTotal:data.data.HitsTotal})
      }
  },
  watch:{
    '$route.name': {
        handler: function(route)  {
          console.log(route)
          this.$store.commit("changeRoute",route)
        },
        deep: true,
        immediate: true
    },
   
    loggedUser() {
      if(this.loggedUser!=null) {
        if(localStorage.getItem("inside")==null){
            localStorage.setItem("inside","yes")
            this.$router.push({path:'/users'})
        }
        else{
          console.log("redirect to same page")
        }
        // this.$router.push({path:'/users'})
         
      }
      else{
        this.$router.push({path:'/'})
        // location.reload();

      }
    },
    notifications(){
      if(this.notifications.message!=null) {
        nativeToast({
          message: this.notifications.message,
          position: 'north-east',
          timeout: 5000,
          type: this.notifications.type
          })
      }
    }
  
  }
  
}
</script>

<style>
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .mt-xs-1{
      margin-top:1rem !important;
  }
}
.border-hids{
  border-left:none !important;
  border-right:none !important; 
  border-top:none !important;
}
.text-main{
  color:#1c4694 !important;
}
.mt--50{
  margin-top:-50px;
}
.smalls{
  font-size:14px;
}
.ex-smalls{
  font-size:14px;
}
.self-center{
  align-self:center !important;
}
body {
  background-color:#f1f4f3 !important
}
.bg-header{
  background-color:#191f28 !important
}
.text-orange{
  color:#c36928 !important
}
.text-gray{
  color:#949495 !important
}
.text-light-gray{
  color:#b4b4b5 !important

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
