import 'react-native-gesture-handler';

import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
/*import
  MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';*/

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import NewFile from './New';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: 'red',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="home"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }}  />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Most_Listned',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //       name="settings"
          //       color={color}
          //       size={size}
          //     />
          // ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {height: 0 },
        }}>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: 'Tab Stack' }}
        />
        <Stack.Screen
          name="NewFile"
          component={NewFile}
          options={{
            headerStyle:{height:0}
          }}
        />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
