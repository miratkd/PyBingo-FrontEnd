<template>
  <div class="app">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Footer }
}
</script>

<style>
.row{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.app{
  min-height: 90vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
