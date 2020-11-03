//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components

export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={{flexDirection: 'row', height:70, backgroundColor:'#fff'}}>

        <Image source={{uri:'https://aboutreact.com/wp-content/uploads/2018/07/drawer.png'}}
                style={{height:50,width:30, marginLeft:30, tintColor:'#000', alignSelf:"center"}}></Image>

        <Text style={{color:'#000', alignSelf:"center",marginLeft:50, fontSize:20}}> New Page </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});