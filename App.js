import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from  '@expo/vector-icons'


export default class App extends React.Component {
  componentDidMount() {
    console.log('Before')
    debugger
    console.log('After')
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <Ionicons name='ios-pizza' color='blue' size={100}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
