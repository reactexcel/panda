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
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:50}} >
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
                        <Text style={{color:'black'}} >Distance</Text>
                        <Text style={{fontWeight:'500',color:'black'}} >0,3 Km</Text>
                    </View>
                    <View style={{flex:1,marginLeft:10,alignItems:'center'}} >
                        <Text style={{color:'black'}}>Free Seats</Text>
                        <View style={{flexDirection:'row'}} >
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >1</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >2</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >3</Text>
                            <Text style={{fontWeight:'500',color:'black',marginRight:5}} >4</Text>
                        </View>
                    </View>
                </View>


                <View style={{flexDirection:'row',marginTop:5,borderBottomWidth:2}} >
                    <View style={{flex:1,marginLeft:20}} >
                        <Text style={{color:'black'}}> Pick up </Text>
                        <View style={{flexDirection:'row',marginTop:5,marginBottom:5}} >
                            <Image source={require('../assets/Pandler_icon_72px.png')} style={{height:18,width:14}}  />
                            <Text style={{fontWeight:'500',color:'black'}} >08.30am Tube Station Forest</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row',marginTop:10,marginBottom:20}} >
                    <View style={{flex:0.4,alignItems:'center',}} >
                        <Image source={require('../assets/Pandler_icon_72px.png')} style={{height:18,width:14}} />
                        <Text style={{color:"black",fontSize:15,marginTop:15}} > Mara W. </Text>
                    </View>
                    <View style={{marginLeft:15}} >
                        <Text style={{color:'black'}} >08.10am Lake tree 10</Text>
                        <Text style={{marginTop:10,color:'black'}} >09.10am ebay</Text>
                    </View>
                </View>



                <View style={{flexDirection:'row'}} >
                    <View>
                        <Text style={{fontSize:15,color:'black'}} > Hi everybody! </Text>
                        <Text style={{fontSize:15,color:'black'}} > I have free space in my car and it would be nice to share a ride! </Text>
                        <Text style={{marginTop:5,fontSize:15,color:'black'}} > Mara </Text>
                    </View>
                </View>


                <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                    <View>
                        <Button dark block style={{width:170,borderRadius:5}} onPress={()=>{this.props.navigation.navigate({ routeName: 'distancescreen' })}} >
                            <Text style={{color:'white'}} > Send request </Text>
                        </Button>
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
