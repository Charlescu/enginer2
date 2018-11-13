<template>
  <div class="hello">
    <ul class="list">
      <li >
        <div id="myChart" class="margin_box">
        </div>
      </li>
      <li >
        <div id="myCharts" class="margin_box">
        </div>
      </li>
      <li >
        <div id="myChartss" class="margin_box">
        </div>
      </li>
      <li >
        <div id="myChartsss" class="margin_box">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      
    }
  },
  mounted(){
    this.drawLine()
  },
  methods: {
     drawLine(){
        //初始化echarts
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myCharts = this.$echarts.init(document.getElementById('myCharts'))
        let myChartss = this.$echarts.init(document.getElementById('myChartss'))
        let myChartsss = this.$echarts.init(document.getElementById('myChartsss'))
        //设置背景色

        //设置参数
        myChart.setOption({
            titles: '数据行',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败', selected:true} 
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',

                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 20,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败'},
                        {value:100, name: '其他因素'}
                    ]
                }
            ]
         });
        myCharts.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败', selected:true} 
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',

                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 20,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败'},
                        {value:100, name: '其他因素'}
                    ]
                }
            ]
         });
        myChartss.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败', selected:true} 
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',

                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 20,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败'},
                        {value:100, name: '其他因素'}
                    ]
                }
            ]
         });
        myChartsss.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败', selected:true} 
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',

                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 20,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:690, name:'数据正常'},
                        {value:210, name:'数据失败'},
                        {value:100, name: '其他因素'}
                    ]
                }
            ]
         });
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
  .list{
   border: 2px solid #ccc;
   min-width: 1200px;
   display:flex;
   background: #424764;
   text-align: center;
  }
  li{ 
   width: 25%;
   margin: 0 5px;
   }
   .margin_box{
      margin: 15px;
      border-radius: 5px;
      background: #2a283e;
   }
  #myChart{
    width: 300px;
    height: 350px;
    
  }
  #myCharts {
    width: 300px;
    height: 350px;
    display: inline-block;
  }
  #myChartss {
    width: 300px;
    height: 350px;
    display: inline-block;
  }
  #myChartsss {
    width: 300px;
    height: 350px;
    display: inline-block;
  }

</style>

