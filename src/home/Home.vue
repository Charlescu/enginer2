<template>
  <div class="hello">
   <default-header></default-header>
   <default-menu></default-menu>
   <main-tips></main-tips>
   <main-page></main-page>
   <main-zhe></main-zhe>
  </div>
</template>

<script>
import DefaultHeader from '../common/DefaultHeader'
import DefaultMenu from '../common/DefaultMenu'
import MainTips from './components/MainTips'
import MainPage from './components/MainPage'
import MainZhe  from './components/MainZhe'
export default {
  name: 'Home',
  components: {
    DefaultHeader: DefaultHeader,
    DefaultMenu: DefaultMenu,
    MainTips: MainTips,
    MainPage: MainPage,
    MainZhe: MainZhe
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
