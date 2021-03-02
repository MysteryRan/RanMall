import React, {Component, useState} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Image, 
        TouchableOpacity, 
        ScrollView, 
        FlatList,
        Dimensions,
        ImageBackground,
        SafeAreaView,
        CachedImage,
        UIActivityIndicator,
        Platform,
        NativeModules,
        StatusBar,
        RefreshControl} from 'react-native';

import io, { Socket } from 'socket.io-client';

const screen = Dimensions.get('window')

class VideoChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
        // console.log(statusBarHeight.height)
        this._configNavigation();
        
    }

    _configNavigation = () => {
        const {navigation, route} = this.props;
        navigation.setOptions({
          headerTitle:<View style={{backgroundColor: 'red'}}/>,
          headerTransparent: false,
          headerTitle: '2223332',
          headerBackTitle: ' ',
          
        });
      }

    componentDidMount() {
        this._configNavigation();

        this._socketConnect();
    }

    _socketConnect = () => {
        console.log('---->');
        this.socket = io('http://192.168.10.25:8080/socket.io');
        this.socket.connect();
        this.socket.on('connect', (data) => {
            console.log(data);
          });
        
          
    }

    _loadData() {
        
    }

    // 全选
    _selectedAll() {
        
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1,backgroundColor: 'yellow',height: 140}}></View>
                        <View style={{flex: 1,backgroundColor: 'red',height: 140}}></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent' ,
        borderRadius: 4,
        marginLeft: 10,
        // marginRight: 10,
    },
})

export default VideoChat;