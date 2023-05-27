import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store, { key } from './store';
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'
import * as ElIcons from '@element-plus/icons'
import axios from './http';
import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const option: ECOption = {
  // ...
};
const app = createApp(App);
// 全局挂载axios
app.config.globalProperties.$axios = axios;
// 图标全局注册
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name])
}

app.use(ElementPlus);
app.use(store, key);
app.use(createPinia())
app.use(router);
app.mount('#app')
