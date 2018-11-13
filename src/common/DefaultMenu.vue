<template>
  <div class="hello">
    <ul class="Menu"> 
      <li class="list_menu" 
          v-for="(item, index) of mainList" 
          :key="index" 
          @click="handleClickShows"
          @click="handleClickGo"
          v-bind:class="{ actived: isActive }"
      >
         <em v-html="item.icons" class="iconfont"></em>
         {{ item.data.menuName }}
         <em v-html="main_icons" class="iconfont main_icons"></em>  
         <div v-if="item.childTreeNode && listShows">
           <default-menu :list="item.childTreeNode.menuName1"></default-menu>
         </div>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DefaultMenu',
  data () {
    return {
      listShows: false,
      isActive: false,
      main_icons: '&#xeb8f;',
      mainList: [
          {
            "id": "1",
            "icons": "&#xeb8f;",
            "data": {
                "menuName": "首页",
                "menuCode": "",
            }
          }, 
          {
            "id": "2",
            "icons": "&#xeb61;",
            "data": {
                "menuName": "能耗监控",
                "menuCode": "BusClock",
            },
            "childTreeNode": [
              {
                "menuName1": "电力",
                "menuName2": "水量",
                "menuName1": "蒸汽量"
              }
            ]
          }, 
          {
            "id": "3",
            "icons": "&#xebb7;",
            "data": {
                "menuName": "实时监控",
                "menuCode": "",
            }
          }, 
          {
            "id": "4",
            "icons": "&#xec4e;",
            "data": {
                "menuName": "能源综合分析",
                "menuCode": "",
            }
          },
          {
            "id": "5",
            "icons": "&#xeb66;",
            "data": {
                "menuName": "能耗公示",
                "menuCode": "",
            }
          },
          {
            "id": "6",
            "icons": "&#xeb66;",
            "data": {
                "menuName": "能耗报告",
                "menuCode": "",
            }
          },
          {
            "id": "7",
            "icons": "&#xeb96;",
            "data": {
                "menuName": "预警管理",
                "menuCode": "",
            }
          },
          {
            "id": "8",
            "icons": "&#xeb8d;",
            "data": {
                "menuName": "系统设置",
                "menuCode": "",
            }
          },
          {
            "id": "9",
            "icons": "&#xebd1;",
            "data": {
                "menuName": "大屏展示",
                "menuCode": "",
            }
          }
        ]
      }
  },
  computed: {
            
        },
  methods: {
      handleClickShows: function () {
        this.listShows != this.listShows
        this.isActive != this.isActive
      },
      handleClickGo: function () {
        this.$emit('goPages','index')
      }
  }
}
</script>
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
  display: block;
  float: left;
}
.Menu {
  width: 150px;
  height: 600px;
  padding: 0 0 0 20px;
  padding-top: 20px;
  list-style-type: none;
  display: inline-block;
  color: #f5f5f5;
  background: #424764;
}
.list_menu {
  float:left;
  width: 100%;
  line-height: 30px;
}
.main_icons {
  float: right;
  margin-right: 5px;
}
.actived {
  color: #fff;
}
</style>
