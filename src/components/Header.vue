<template>
  <div class="hello">
     <b-container style="padding-bottom:4rem;" class=" pr-5 pl-5 pt-3 bg-header" fluid>
       <b-container class="pl-0 pr-0">
       <div class="d-flex d-md-flex">
         <img  align="left"
              style="width: 80px;
              height: 30px;"
          alt="Vue logo" src="../assets/logo.png">
       </div>
       <div class="mt-2">
         <b-row>
            <b-col md="1" class="text-left pr-0 text-orange">
              Users
            </b-col>
            <b-col md="1" class="text-left pl-0  text-gray">
               Orders
            </b-col>
         </b-row>
       </div>
       </b-container>
     </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
