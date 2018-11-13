<template>
  <div class="mian">
    <el-header >
      <el-col :span="24">
        <div class="grid-content bg-purple-dark whiteColor fontWeight6 paddingLeft2">fsdgdfsg</div>
      </el-col>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'DefaultHeader',
  components: {
   
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
  .el-header {
    line-height: 80px;
    padding: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
</style>
