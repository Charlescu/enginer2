<template>
  <div class="hello">
    <default-header></default-header>
    <default-menu></default-menu>
  </div>
</template>

<script>
import DefaultHeader from '../common/DefaultHeader'
import DefaultMenu from '../common/DefaultMenu'
export default {
  name: 'NengHao',
  components: {
    DefaultHeader: DefaultHeader,
    DefaultMenu: DefaultMenu
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
