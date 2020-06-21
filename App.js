import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaView style={{flex:1}}>
        <View>
          <AddEntry />
        </View>
      </SafeAreaView>
    );
  }
}

