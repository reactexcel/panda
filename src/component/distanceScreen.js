/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Button, Item, Input, Label, Form ,Content } from 'native-base';

export default class DistanceScreen extends Component {

    static navigationOptions =({ navigation }) => {
        return{
        title: 'MARA W.',
        headerTitleStyle :{alignSelf: 'center'},
        headerRight: <Image source={require('../assets/Pandler_icon_72px.png')} style={{height:30,width:23,marginRight:20}}  />,
        headerLeft:
                 <TouchableHighlight onPress={()=>{navigation.goBack()}} >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                        <Icons name="ios-arrow-back" onClick={()=>{navigation.goBack()}}  style={{marginLeft:10}} size={25} /> 
                    </View>
                  </TouchableHighlight>,
        
      }};
    render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1,marginLeft:20,marginRight:20}} >
            <View style={{flex:0.5,borderWidth:5}}  >
                <Text>map</Text>
            </View>
           <View style={{flex:1}} >
                
                <View style={{flexDirection:'row',borderBottomWidth:2}} >
                    <View style={{flex:1,marginLeft:20,borderRightWidth:2}} >
                        <Text>Distance</Text>
                        <Text style={{fontWeight:'500',color:'black'}} >0,3 Km</Text>
                    </View>
                    <View style={{flex:1,marginLeft:10,alignItems:'center'}} >
                        <Text>Free Seats</Text>
                        <View style={{flexDirection:'row'}} >
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >0</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >0</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >0</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >0</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:5,borderBottomWidth:2}} >
                    <View>
                        <Text> pickup </Text>
                        <Text> pickup </Text>
                    </View>
                </View>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
