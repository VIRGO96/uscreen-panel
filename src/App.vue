<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  watch:{
    '$route.name': {
        handler: function(route)  {
          console.log(route)
          this.$store.commit("changeRoute",route)
        },
        deep: true,
        immediate: true
    }
  }
}
</script>

<style>
.mt--50{
  margin-top:-50px;
}
.smalls{
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
