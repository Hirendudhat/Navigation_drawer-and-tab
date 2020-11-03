import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text, Image, Alert } from 'react-native';

export default class Project extends Component {
 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
   }
 }

GetItem (name) {
 Alert.alert(name);
 }

componentDidMount(){

    return fetch('https://www.radiosbackend.com/radioperu/index.php/endpoint/categories/get?X-API-KEY=9Td3wkoVHZakyrpi3AmuDOMhK')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
 }
 
 render() {
   if (this.state.isLoading) {
     return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size="large" />
       </View>
     );
   }
 
   return (
     <View style={styles.MainContainer}> 
       <FlatList
          data={ this.state.dataSource }
          numColumns={2}
          renderItem={({item}) => 
            <View style={{flex:1, flexDirection: 'column', backgroundColor:'white', margin:10, borderRadius:10}}
                  onStartShouldSetResponder={ () => this.props.navigation.navigate('NewFile')}>
              <Image source = {{ uri: item.url_covercat }} style={styles.imageView} />
              <Text style={styles.textView} >{item.name}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()} 
        />
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
MainContainer : {
  justifyContent: 'center',
  flex:1
},
 
imageView: {
  width: '100%',
  height: 100 ,
  borderTopLeftRadius:10,
  borderTopRightRadius:10  
},
 
textView: {
  width:'100%', 
  textAlignVertical:'center',
  padding:10,
  color: '#000',
  textAlign:'center'
}
});