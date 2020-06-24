import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux' //wrap redux into our application
import reducer from  './reducers'
import History from './components/History'

export default class App extends React.Component {
  render(){
    return (
      <Provider store={createStore(reducer)}>
        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}} >
            <History />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

