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
    TouchableOpacity
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Button, Item, Input, Label, Form ,Content } from 'native-base';

export default class LocationScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        from : '',
        to: '',
      }
      this.handleSwap=this.handleSwap.bind(this);
    }

    handleSwap(){
      const {from ,to } = this.state;
      const temp = from ;
      this.setState({from : to , to: temp});
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Where',
            headerTitleStyle: { alignSelf: 'center' },
            headerRight: <Image source={require('../assets/Pandler_icon_72px.png')} style={{ height: 30, width: 23, marginRight: 20 }} />,
            headerLeft:
                <TouchableOpacity onPress={() => { navigation.goBack() }} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',borderWidth:1,width:50 }} >
                        <Icons name="ios-arrow-back"  style={{ marginLeft: 10 }} size={25} />
                    </View>
                </TouchableOpacity>,

        }
    };
    render() {
    return (
      <View style={styles.container}>
       
       <View style={{flex:1,marginTop:50,marginRight:10}} >
        <View style={{flexDirection:'row'}} >
            
            <View style={{flex:1, margin:10}} >
            <Item  >
                <Input value={this.state.from}
                  placeholder="From?" 
                  onChangeText={(text)=>{ this.setState({from:text})}}  />
            </Item>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icons name="ios-home-outline" size={25} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:10}} >Home</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}} >
            <View style={{flex:1, margin:10}} >
              <Text> Use my current location </Text>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icon name="briefcase" size={25} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:10}} >Work</Text>
                </View>
            </View>
        </View>
        </View>


        <View style={{flex:1,marginRight:10}} >
            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flex:1}} >
                <Icons name="md-swap" onPress={this.handleSwap} size={30}  style={{transform: [{ rotate: '90deg'}],marginRight: 15, }}  />
            </View>
        </View>


        <View style={{flex:1,marginBottom:20,marginRight:10}} >
        <View style={{flexDirection:'row'}} >
            
            <View style={{flex:1, margin:10}} >
            <Item inlineLabel >
                <Input value={this.state.to}
                  placeholder="To?"
                  onChangeText={(text)=>{ this.setState({to:text})}}   />
            </Item>
            </View>
            <View >
                <View style={{marginRight:10}} >
                    <Icons name="ios-home-outline" size={25} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:10}} >Home</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row'}} >
            <View style={{flex:1, margin:10}} />
            <View >
                <View style={{marginRight:10}} >
                    <Icon name="briefcase" size={25} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:10}} >Work</Text>
                </View>
            </View>
        </View>
        </View>

        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
          <View>
            <Button dark block style={{width:170,borderRadius:5}} onPress={()=>{this.props.navigation.navigate({ routeName: 'distancescreen' })}} ><Text style={{color:'white'}} > Continue </Text></Button>
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
