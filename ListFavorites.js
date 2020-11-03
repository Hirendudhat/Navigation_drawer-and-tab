import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Screen3 extends Component {
  
  render() {
    return (
      <SafeAreaView>
      
      <View style={{flexDirection: 'row', height:70, backgroundColor:'#fff'}}>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Firsrpage')}>
          <Image source={require('../assets/arrow.png')}
                  style={{height:20,width:40, marginLeft:30, tintColor:'#000', alignSelf:"center"}}></Image>
          
        </TouchableOpacity>
        <Text style={{color:'#000', alignSelf:"center",marginLeft:50, fontSize:20}}> HomePage </Text>
      </View>
            <Text style={StyleSheet.MainContainer}> List Favorites </Text>
        
      </SafeAreaView>
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