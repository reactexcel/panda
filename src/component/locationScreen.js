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
  Text
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Button, Item, Input, Label, Form ,Content } from 'native-base';

export default class LocationScreen extends Component {
    static navigationOptions = {
        title: 'Where',
        headerTitleStyle :{alignSelf: 'center', color: 'black'},
        
      };
    render() {
    return (
      <View style={styles.container}>
       
       <View style={{flex:1,marginTop:100}} >
        <View style={{flexDirection:'row'}} >
            
            <View style={{flex:1, margin:10}} >
            <Item inlineLabel >
                <Label>From?</Label>
                <Input />
            </Item>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icons name="ios-home-outline" size={30} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:14}} >Home</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}} >
            <View style={{flex:1, margin:10}} >
              <Text> Use my current location </Text>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icon name="briefcase" size={30} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:14}} >Work</Text>
                </View>
            </View>
        </View>
        </View>

        <View style={{flex:1}} >
            <View style={{flexDirection:'row',justifyContent:'flex-end'}} >
                <Icons name="md-swap" size={30}  style={{transform: [{ rotate: '90deg'}],marginRight: 15, }}  />
            </View>
        </View>

        <View style={{flex:1}} >
        <View style={{flexDirection:'row'}} >
            
            <View style={{flex:1, margin:10}} >
            <Item inlineLabel >
                <Label>To?</Label>
                <Input />
            </Item>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icons name="ios-home-outline" size={30} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:14}} >Home</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}} >
            <View style={{flex:1, margin:10}} >
              <Text> Use my current location </Text>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icon name="briefcase" size={30} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:14}} >Work</Text>
                </View>
            </View>
        </View>
        </View>

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
          <View>
            <Button dark block style={{width:170,borderRadius:5}} ><Text style={{color:'white'}} > Continue </Text></Button>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
