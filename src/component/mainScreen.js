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
    TouchableHighlight,
    ImageBackground,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Button, Item, Input, Label, Form, Content } from 'native-base';
var { height, width } = Dimensions.get('window');
export default class MainScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerTitleStyle: {  textAlign: 'center', alignSelf: 'center', color: 'black' },
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: width, height: 205, backgroundColor: 'rgba(0,0,0,.6)'}}
                    source={require('../assets/backImage.png')}
                >
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, flexDirection:'row',justifyContent:'center',alignContent:'center'}} >
                        <View style={{ justifyContent: 'space-around', alignContent: 'center'}}>
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/pic2.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 24,textAlign:'center' }}>Hi Yen!</Text>
                        </View>
                    </View>  
                </ImageBackground>
                <View style={{flex:1,flexDirection:'column',padding:40}}>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'space-around'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity>
                                <Icons name="ios-search-outline" size={55} style={{ alignSelf: 'center',color:'black' }} />
                                <Text style={{ alignSelf: 'center', marginTop: 15, marginLeft: 7, color: 'black'}}>I NEED A RIDE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{justifyContent:'space-between'}}>
                                <Icons name="ios-add-circle-outline" size={55} style={{ alignSelf: 'center', color: 'black',marginLeft:14 }} />
                                <Text style={{ alignSelf: 'center', marginTop: 10, color: 'black',marginLeft:15}} >I CAN GIVE A RIDE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column',justifyContent:'space-around' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity>
                                <Icons name="ios-albums-outline" size={50} style={{ alignSelf: 'center', color: 'black' }} />
                                <Text style={{ alignSelf: 'center', marginTop: 15, color: 'black'}} >MY DRIVES</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icons name="ios-filing-outline" size={65} style={{ marginRight:0,alignSelf: 'center', color: 'black',marginTop:-5}} />
                                <Text style={{ alignSelf: 'center', marginTop: 5, color: 'black' }}>MESSAGES</Text>
                            </TouchableOpacity>
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
    imageContainer: {
        marginTop:10,
        height: 128,
        width: 128,
        borderRadius: 74
    },
    image: {
        height: 128,
        width: 128,
        borderRadius: 74
    },
});
