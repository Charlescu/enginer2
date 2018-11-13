<template>
  <div class="hello">
    <div class="head_title">
      {{ titles }}
    </div> 
    <ul class="list">
      <li class="list_item" id="MainPageZhe">
       
      </li>
      <li class="list_item" id="MainPageZhes">
       
      </li>
      <li class="list_item" id="MainPageZhess">
       
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainZhe',
  data () {
    return {
      titles: '能源分析：电量、水量、蒸汽量'
    }
  },
  mounted () {
     this.drawLine()
  },
  methods: {
    drawLine () {
      //初始化三个折线图
      let MainPageZhe = this.$echarts.init(document.getElementById('MainPageZhe'));
      let MainPageZhes = this.$echarts.init(document.getElementById('MainPageZhes'));
      let MainPageZhess = this.$echarts.init(document.getElementById('MainPageZhess'));
      //对三个折线图开始进行配置
      MainPageZhe.setOption({
        title: {
            text: '用电量折线图',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['明年计划','当年','改造前（去年）']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'明年计划',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210]
            },
            {
                name:'当年',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'改造前（去年）',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410,201, 154, 190, 330, 410,298]
            } 
        ]
     })
      //第二个折线图
      MainPageZhes.setOption({
        title: {
            text: '用水量折线图',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['明年计划','当年','改造前（去年）']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'明年计划',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210]
            },
            {
                name:'当年',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'改造前（去年）',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410,201, 154, 190, 330, 410,298]
            } 
        ]
     })
      //第三个折线图
      MainPageZhess.setOption({
        title: {
            text: '蒸汽量折线图',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['明年计划','当年','改造前（去年）']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'明年计划',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210]
            },
            {
                name:'当年',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'改造前（去年）',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410,201, 154, 190, 330, 410,298]
            } 
        ]
     })
    }
  }   
}
</script>
<style scoped>
  .hello { 
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
  .list {
   min-width: 1200px;
   margin: 0 auto;
   border: 2px solid #ccc;
   background: #424764;
   display: flex;
  }
  li{
    display: inline-block;
    margin: 15px 25px;
    background: #2a283e;
  }
  #MainPageZhe { 
    width: 590px;
    height: 350px;
  }
   #MainPageZhes {
    width: 590px;
    height: 350px;
  }
   #MainPageZhess {
    width: 590px;
    height: 350px;
  }
  
</style>
