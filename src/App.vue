<template>
  <div id="app">
    
    <router-view/>
    
    <router-link to="home">首页</router-link>
    <router-link to="cart">购物车</router-link>
    <router-link to="my">我的111</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active {
  color: red;
}
</style>
