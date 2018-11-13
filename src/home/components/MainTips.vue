<template>
  <div class="hello">
    <div class="head_title">
      {{ titles }}
    </div> 
    <ul class="list">
      <li v-for="item of dataList" class="list_item">
        <p>{{ item.name }}</p>
        <span class="item_value">{{ item.value }}</span>
        <p>{{ item.names}}</p>
        <span class="item_value">{{ item.values }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainTips',
  data () {
    return {
      titles: '关键指标', 
      shijain: 'sdfsfsd',
      dataList: [
      {
        name: '实时总功率',
        value: '500KW',
        names:'当年总电量',
        values: '900MW'
      },
      {
        name: '实时总流水量',
        value: '500KW',
        names:'当年总用水量',
        values: '900MW'
      },
      {
        name: '实时总蒸汽流量',
        value: '500KW',
        names:'当年总蒸汽量',
        values: '900MW'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{ 
    margin-top: 15px;
    margin-left: 180px;
    margin-right: 10px;
    width: calc(100% - 190px)
   }
  .head_title {
    line-height: 35px;
    min-width: 1200px;
    background: #3b3e57;
    text-indent: .5em;
    color: #fff;
  }
  .list{
   display: flex;
   min-width: 1200px;
   border: 2px solid #ccc;
   background: #424764;
  }
  .list_item{
    display: inline-block;
    margin-left: 15px;
    width: 31%;
    min-width: 165px;
    color: #fff;
  }
  .item_value{
    margin-left: 30px;
  }
</style>
