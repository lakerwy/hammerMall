<template>
  <div id="app">
    <Header />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="./Home">首页</router-link>
    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer,
  }
}
</script>

<style>
* {margin: 0; padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
}
</style>
