<template>
  <div class="hello">
    <div class="logos"> {{ logos }}</div>
    <div class="head_titles">{{ titles }}</div>
    <div class="login"><em class="iconfont man_icon" v-html="icons"></em>登录</div>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data () {
    return {
      logos: '智能云',
      titles: '津安能源云 三中心医院专版',
      icons: '&#xeb8a;'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  height: 100%;
  margin: 0;
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
}

.hello{
  line-height: 50px;
  min-width: 530px;
  text-indent: 2em;
  background: #424764;
  display: flex;
  justify-content: space-between;
}
.logos{
  width: 170px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  background: #4c61ee;
}
.head_titles {
  color: #fff;
}
.man_icon {
  margin-right: 5px;
}
.login{
  margin-right: 35px;
  color: #ccc;
  display: inline-block;
}
</style>
