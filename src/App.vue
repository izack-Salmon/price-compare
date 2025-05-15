<template>
  <div id="app">
    <router-view></router-view>
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue'
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.scss'

export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style lang="scss">
#app {
  padding-bottom: 70px; // Space for bottom navigation
}
</style> 