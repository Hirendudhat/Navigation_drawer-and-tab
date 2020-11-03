import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Screen1 from './pages/Screen1';
import Sleep_Time from './pages/ListFavorites';
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({

  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'SleepTime',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#fff',
        shadowOpacity: false, 
      },
      headerTintColor: '#000',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({

  Second: {
    screen: Sleep_Time,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerShown: false
    }),
  },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 1',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  },
);  
export default createAppContainer(DrawerNavigatorExample);