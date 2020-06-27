import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import { View, Platform, SafeAreaView, StyleSheet } from 'react-native'
import AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux' //wrap redux into our application
import reducer from  './reducers'
import History from './components/History'
import {FontAwesome} from '@expo/vector-icons'
import {white, purple} from './utils/colors'
import EntryDetail from './components/EntryDetail'


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
      </Tab.Navigator>
  );
}

//Config for StackNav will be included within the Stack.Screen


const Stack = createStackNavigator();

//APP
export default class FitnessApp extends React.Component {
  render(){
    return (

        <SafeAreaView style={{flex:1}}>
          <Provider store={createStore(reducer)}>
          <NavigationContainer>
              <Stack.Navigator >
                <Stack.Screen name="TabNav" component={TabNav} 
                  options={{
                    title:"HISTORY",
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

