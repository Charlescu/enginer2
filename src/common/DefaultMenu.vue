<template>
  <div class="mian">
    <el-aside>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark whiteColor fontWeight6 paddingLeft2" v-for="(item, index) of menuList">{{ item.name }}</div>
      </el-col>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'DefaultMenu',
  components: {
   
  },
  data () {
    return {
      msg: 'weizhixinxi', 
      menuList: [
      {id: '001',name: '首页'},
      {id: '001',name: '能耗监控',childTree:[{id: '0011',name: '电力'},{id: '0012',name: '水量'},{id: '0013',name: '蒸汽量'}]},
      {id: '001',name: '实时监控'},
      {id: '001',name: '能源综合分析',childTree:[{id: '0011',name: '电力'},{id: '0012',name: '水量'},{id: '0013',name: '蒸汽量'}]},
      {id: '001',name: '能耗公示'},
      {id: '001',name: '能耗报告',childTree:[{id: '0011',name: '电力'},{id: '0012',name: '水量'},{id: '0013',name: '蒸汽量'}]},
      {id: '001',name: '预警管理',childTree:[{id: '0011',name: '电力'},{id: '0012',name: '水量'},{id: '0013',name: '蒸汽量'}]},
      {id: '001',name: '系统设置',childTree:[{id: '0011',name: '电力'},{id: '0012',name: '水量'},{id: '0013',name: '蒸汽量'}]},
      {id: '001',name: '大屏展示'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-aside {
    height: 100%;
   
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
