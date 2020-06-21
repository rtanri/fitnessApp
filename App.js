import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'


export default class App extends React.Component {
  state = {
    run:0,
    bike:0,
    swim:0,
    sleep:0,
    eat:0,
  }
  increment =(metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count //if the number exceed max value, will stay as max
      }
    })
  }
  
  decrement =(metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count > 0 ? 0 : count, //if the number less than 0, will stay as 0
      }
    })
  }
  
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  render(){
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}

