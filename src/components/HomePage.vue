<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card>
        <div id="top-left"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <div id="top-right"></div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col>
      <el-card>
        <div id="main"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

option && myChart.setOption(option);
</script>

<style scoped>
</style>
