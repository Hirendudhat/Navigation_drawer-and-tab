import React, { Component } from 'react';

import { ActivityIndicator, FlatList, Text, StyleSheet, View,Image,TouchableOpacity} from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: []
    }

    this.arrayholder = [];
  }

  //_menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };

  componentDidMount() {
  
    return fetch('https://www.radiosbackend.com/radioperu/index.php/endpoint/trend/all?X-API-KEY=9Td3wkoVHZakyrpi3AmuDOMhK')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            marginHorizontal:10,
            backgroundColor: "#000",
          }}
        />
      );
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20, marginTop:20}}>
            <ActivityIndicator size='large' />
          </View>
        );
      }
   
      return (
   
        <View style={styles.MainContainer}>
         
        <FlatList style={{marginTop:5}}
           data={this.state.data}
           keyExtractor={ (item, index) => index.toString() }
           ItemSeparatorComponent={this.itemSeparator}
           renderItem={({item}) => 
            <View style={{flex:1, flexDirection: 'row', backgroundColor:'white', marginHorizontal:10,paddingRight:10}}>
              <Image source = {{ uri: item.radio.image_url }} style={styles.imageView} />
              <Text style={styles.textView}>{item.radio.name}</Text>
              <View style = {{ width:20,height:20,flex:1,flexDirection:'row-reverse',alignSelf:'center'}}>
              <Menu
                ref={this.setMenuRef}
                button = { 
                <TouchableOpacity onPress = {this.showMenu}> 
                <Image onPress = {this.showMenu} style = {{ width:20,height:20}} source = {require('../assets/three_dot.png')} /> 
                </TouchableOpacity> }>
                <MenuItem >Play</MenuItem>
                <MenuItem onPress={() =>this.props.navigation.navigate('List_FavoritesStack')}>Add to Favorite List</MenuItem>
              </Menu>  
              </View>
            </View>  
          }
          keyExtractor={(item, index) => index.toString()} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  
  imageView: {
    width:70,
    height: 50,
    margin:10,
    marginVertical:10,
    borderRadius : 10
  },
  
  textView: {
    alignSelf:"center",
    color: '#000'
  }
});