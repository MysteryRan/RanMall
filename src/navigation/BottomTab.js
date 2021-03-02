import React, {Component} from 'react';
import {
    getFocusedRouteNameFromRoute,
  // NavigationContainer,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';
import {Text,View, TextInput,Dimensions, Image} from 'react-native'
import {
  // BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Setting from './Home'
import HomePage from './Homepage'
import ShopCar from '../screen/ShopCar'
import Mine from '../screen/Mine'
import VideoChat from '../screen/VideoChat'

const screen = Dimensions.get('window');

//获取标签导航的导航器和路由
const Tab = createBottomTabNavigator();

class BottomTabs extends React.Component {
  componentDidUpdate() {
    this.setOption();
  }

  setOption = () => {
    console.log('this.props   l')
    const {navigation, route} = this.props;
    var routeName = getFocusedRouteNameFromRoute(route)
    if (navigation) {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: '',
        headerBackground: () => (
            <View style={{backgroundColor: '#FF5E87', height: '100%', width: '100%', justifyContent: 'center'}}>
            <TextInput placeholder="请输入感兴趣的内容" style={{position: "absolute",backgroundColor: 'white', height: 40,bottom: 10, width: screen.width - 40, marginLeft: 20, marginRight: 80}}></TextInput>
        </View>
          ),
      });
      if (routeName != 'HomeTabs') {
        navigation.setOptions({
          headerTransparent: true,
          // headerTitle: getHeaderTitle(routeName),
          headerBackground: null,
        });
      }
    }
    
  };

  render() {
    return (
      <Tab.Navigator
        initialRouteName={'HomePage'}
        tabBarOptions={{
          activeTintColor: '#f86442',
        }}>
        <Tab.Screen
          name={'HomeTabs'}
          component={HomePage}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../images/bar/icon-index-select.png') : require('../images/bar/icon-index.png')}
                    style={{width: 32, height: 32}}/>
            ),
          }}
        />
        <Tab.Screen
          name={'Found'}
          component={ShopCar}
          options={{
            tabBarLabel: '购物车',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../images/bar/icon-index-select.png') : require('../images/bar/icon-index.png')}
                    style={{width: 32, height: 32}}/>
            ),
          }}
        />
        <Tab.Screen
          name={'Account'}
          component={Mine}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../images/bar/icon-index-select.png') : require('../images/bar/icon-index.png')}
                    style={{width: 32, height: 32}}/>
            ),
          }}
        />
        <Tab.Screen
          name={'Video'}
          component={VideoChat}
          options={{
            tabBarLabel: '视频',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../images/bar/icon-index-select.png') : require('../images/bar/icon-index.png')}
                    style={{width: 32, height: 32}}/>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
