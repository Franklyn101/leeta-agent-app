import React from 'react'
import CustomSafeAreaView from './CustomSafeAreaView'
import { View, Text } from 'react-native'
import { BarChart } from "react-native-gifted-charts";

const barchart = () => {
    const data = [
        {value: 2, label: 'sun'},
        {value: 20, label: 'mon'},
        {
          value: 0,
          label: 'tue',
          topLabelComponent: () => (
            <Text style={{color: '#1D2939', fontSize: 18, marginBottom: 6}}></Text>
          ),
        },
        {value: 0, label: 'wed'},
        {value: 0, label: 'thu'},
        {value: 0, label: 'fri'},
        {value: 0, label: 'sat'},
      ];
    
  return (

    
    <CustomSafeAreaView>
       <View className='pl-7' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BarChart width={300} color="gray" data={data} frontColor="#020266"  barWidth={18}
      xAxisLabelTextStyle={{ color: "#98A2B3", fontSize: 12 }}
      yAxisTextStyle={{ color: "#98A2B3", fontSize: 12 }}
       />
    </View>

    </CustomSafeAreaView>
  )
}

export default barchart

