import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import style from './style.module.less';

import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';

import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import {SVGRenderer, SkiaChart} from '@wuba/react-native-echarts';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  BarChart,
]);

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
};

function App(): React.JSX.Element {
  const skiaRef = useRef<typeof SkiaChart>(null);

  useEffect(() => {
    let chart = echarts.init(skiaRef.current, 'light', {
      renderer: 'svg',
      width: 400,
      height: 250,
    });
    chart.setOption(option);
    return () => chart?.dispose();
  }, []);

  return (
    <View style={style.app}>
      <Text>App</Text>
      <SkiaChart ref={skiaRef} />
    </View>
  );
}

export default React.memo(App);
