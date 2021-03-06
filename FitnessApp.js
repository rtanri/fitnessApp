import React from 'react'
import { View, Platform, SafeAreaView, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Ionicons, FontAwesome} from '@expo/vector-icons'


import {createStore} from 'redux'
import {Provider} from 'react-redux' //wrap redux into our application
import reducer from  './reducers'

import History from './components/History'
import AddEntry from './components/AddEntry'
import EntryDetail from './components/EntryDetail'
import Live from './components/Live'

import {white, purple} from './utils/colors'
import {setLocalNotification} from './utils/helpers'


//Config for TabNav
const RouteConfigs = {
  History:{
    name: "History",
    component: History,
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name="calendar-plus-o" size={24} color={tintColor} />, title: 'Your Logs'}
  },
  AddEntry:{
    name: "Add Entry",
    component: AddEntry,
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Entry'}
  },
  Live: {
    name:"Live",
    component: Live,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>, title: 'Live' }
  }
}


const Tab = Platform.OS === 'ios' 
      ? createBottomTabNavigator() 
      : createMaterialTopTabNavigator()

function TabNav() {
  return (
      <Tab.Navigator 
          tabBarOptions={{
            activeTintColor: Platform.OS === 'ios'? purple : white,
            inactiveTintColor: 'grey',
            style :{
              backgroundColor: Platform.OS ==='ios' ? white : purple,
              shadowColor: "rgba(0,0,0,0.5)"
            }
          }}>
        <Tab.Screen {...RouteConfigs['History']} />
        <Tab.Screen {...RouteConfigs['AddEntry']} />
        <Tab.Screen {...RouteConfigs['Live']} />
      </Tab.Navigator>
  );
}

//Config for StackNav will be included within the Stack.Screen


const Stack = createStackNavigator();

//APP
export default class FitnessApp extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  
  render(){
    return (

        <SafeAreaView style={{flex:1}}>
          <Provider store={createStore(reducer)}>
          <NavigationContainer>
              <Stack.Navigator >
                <Stack.Screen name="TabNav" component={TabNav} 
                  options={{
                    title:"Fitness App",
                  }} 
                />
                <Stack.Screen name="EntryDetail" component={EntryDetail}
                  options= {{
                    headerTintColor: white,
                    headerStyle:{backgroundColor: purple},
                  }}
                 />
              </Stack.Navigator>
          </NavigationContainer>
          </Provider>
        </SafeAreaView>  

    );
  }
}

