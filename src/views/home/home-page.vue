<template>
    <el-row :gutter="5">
        <el-col :span="6">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="topOne" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="topTwo" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="topThree" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="topFour" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="5" style="margin-top: 10px">
        <el-col>
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="myChart" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="5" style="margin-top: 10px">
        <el-col :span="12">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="bottomLeft" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
        <el-col :span="12">
            <el-card :style="{'height': '255px'}" :body-style="{'padding': '0px'}">
                <div ref="bottomRight" :style="{ width: '100%', height: '255px' }"></div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "home",
  components: {},
  data() {
    return {};
  },
  setup(){
    // 第一个图
    const topOne = ref<HTMLElement>();
    const topOnes = ref<any>();
    setTimeout(() => {
      // 绘制图表
      topOnes.value = echarts.init(topOne.value!);
      topOnes.value.setOption({
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}'
            },
            data: [
                {
                value: 50,
                name: 'SCORE'
                }
            ]
            }
        ]
      });
    }, 10);
    // 第二个图
    const topTwo = ref<HTMLElement>();
    const topTwos = ref<any>();
    setTimeout(() => {
      // 绘制图表
      topTwos.value = echarts.init(topTwo.value!);
      option = {
        legend: {
            data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
            // shape: 'circle',
            indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
            ]
        },
        series: [
            {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
                },
                {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
                }
            ]
            }
        ]
      };
      topTwos.value.setOption(option);
    }, 10);
    // 第三个图
    const topThree = ref<HTMLElement>();
    const topThrees = ref<any>();
    setTimeout(() => {
      // 绘制图表
      topThrees.value = echarts.init(topThree.value!);
      option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
            ],
            type: 'scatter'
            }
        ]
      };
      topThrees.value.setOption(option);
    }, 10);
    // 第四个图
    const topFour = ref<HTMLElement>();
    const topFours = ref<any>();
    type EChartsOption = echarts.EChartsOption;
    let option: EChartsOption;
    setTimeout(() => {
      // 绘制图表
      topFours.value = echarts.init(topFour.value!);
      option = {
            tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
            }
        ]
      };
      topFours.value.setOption(option);
    }, 10);
    
    // 中间图
    const app: any = {};
    const myChart = ref<HTMLElement>();  //也可以用const myChart = ref<any>(); 
    const myCharts = ref<any>();
    const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
    ] as const;
    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
            left: 'left',
            center: 'center',
            right: 'right'
            }
        },
        verticalAlign: {
            options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
            }
        },
        position: {
            options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
            }, {} as Record<string, string>)
        },
        distance: {
            min: 0,
            max: 100
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            const labelOption: BarLabelOption = {
            rotate: app.config.rotate as BarLabelOption['rotate'],
            align: app.config.align as BarLabelOption['align'],
            verticalAlign: app.config
            .verticalAlign as BarLabelOption['verticalAlign'],
            position: app.config.position as BarLabelOption['position'],
            distance: app.config.distance as BarLabelOption['distance']
            };
            // myCharts.setOption<echarts.EChartsOption>({
            // series: [
            //     {
            //     label: labelOption
            //     },
            //     {
            //     label: labelOption
            //     },
            //     {
            //     label: labelOption
            //     },
            //     {
            //     label: labelOption
            //     }
            // ]
            // });
        }
    };

    type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

    const labelOption: BarLabelOption = {
        show: true,
        position: app.config.position as BarLabelOption['position'],
        distance: app.config.distance as BarLabelOption['distance'],
        align: app.config.align as BarLabelOption['align'],
        verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
        rotate: app.config.rotate as BarLabelOption['rotate'],
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
    };

    setTimeout(() => {
      // 绘制图表
      myCharts.value = echarts.init(myChart.value!);
      myCharts.value.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
        },
        xAxis: [
            {
            type: 'category',
            axisTick: { show: false },
            data: ['2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
            type: 'value'
            }
        ],
        series: [
            {
            name: 'Forest',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390]
            },
            {
            name: 'Steppe',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290]
            },
            {
            name: 'Desert',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190]
            },
            {
            name: 'Wetland',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [98, 77, 101, 99, 40]
            }
        ],
      });
    }, 10);
    // 底部左图
    const bottomLeft = ref<HTMLElement>();
    const bottomLefts = ref<any>();
    const bottomLeftData: number[][] = [];
    for (let i = 0; i <= 100; i++) {
        let theta = (i / 100) * 360;
        let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
        bottomLeftData.push([r, theta]);
    }
    setTimeout(() => {
      // 绘制图表
      bottomLefts.value = echarts.init(bottomLeft.value!);
      bottomLefts.value.setOption({
        title: { text: "Two Value-Axes in Polar" },
        legend: {
            data: ['line']
        },
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {},
        series: [
            {
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                data: bottomLeftData
            }
        ],
      });
    }, 10);
    // 底部右图
    const bottomRight = ref<HTMLElement>();
    const bottomRights = ref<any>();
    const bottomRightData: number[][] = [];
    for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        bottomRightData.push([r, i]);
    }
    setTimeout(() => {
      // 绘制图表
      bottomRights.value = echarts.init(bottomRight.value!);
      bottomRights.value.setOption({
        title: { text: "Two Value-Axes in Polar" },
        legend: {
            data: ['line']
        },
        polar: {
            center: ['50%', '54%']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [
            {
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                showSymbol: false,
                data: bottomRightData
            }
        ],
      });
    }, 10);

    return {
        topOne,
        topTwo,
        topThree,
        topFour,
        myChart,
        bottomLeft,
        bottomRight
    };
  }
});
</script>
