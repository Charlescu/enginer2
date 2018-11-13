<template>
  <div class="Home">
    <default-header></default-header>
    <default-menu></default-menu>
  </div>
</template>

<script>
import DefaultHeader from '../common/DefaultHeader'
import DefaultMenu from '../common/DefaultMenu'
export default {
  name: 'Home',
  components: {
    DefaultHeader:DefaultHeader,
    DefaultMenu:DefaultMenu
  },
  data () {
    return {
      msg: 'weizhixinxi', 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
