import React from 'react'
import { View, SafeAreaView } from 'react-native'
import AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux' //wrap redux into our application
import reducer from  './reducers'

export default class App extends React.Component {
  render(){
    return (
      <Provider store={createStore(reducer)}>
        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}} >
            <AddEntry />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

