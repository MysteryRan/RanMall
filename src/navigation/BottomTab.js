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
// import Home from '@/pages/Home';
// import Found from '@/pages/Found';
// import Listen from '@/pages/Listen';
// import Account from '@/pages/Account';
// import index, {
//   RootStackNavigation,
//   RootStackParamList,
// } from '@/navigator/index';
// import {State} from 'react-native-gesture-handler';
// import {CompositeNavigationProp} from '@react-navigation/native';
// import {HeaderTitle, StackNavigationProp} from '@react-navigation/stack';
// import IconFont from '../iconfont/index';
// import HomeTabs from '@/navigator/HomeTabs';

import Setting from './Home'
import HomePage from './Homepage'

const screen = Dimensions.get('window');

//获取标签导航的导航器和路由
const Tab = createBottomTabNavigator();

//获取title的方法
function getHeaderTitle(routeName) {
  // const routeName = route.state
  //   ? route.state.routes[route.state.index].name
  //   : route.params?.screen || 'HomeTabs';
  console.log('routeName:' + routeName);
  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账户';
    default:
      return '';
  }
}

class BottomTabs extends React.Component {
  componentDidMount() {
    this.setOption();
  }
  componentDidUpdate() {
    this.setOption();
  }

  setOption = () => {
    console.log('this.props')
      console.log(this.props)
    const {navigation, route} = this.props;

    var routeName = getFocusedRouteNameFromRoute(route)
    if (routeName === 'HomeTabs') {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: '',
        headerBackground: () => (
            <View style={{backgroundColor: '#FF5E87', height: '100%', width: '100%', justifyContent: 'center'}}>
            <TextInput placeholder="请输入感兴趣的内容" style={{position: "absolute",backgroundColor: 'white', height: 40,bottom: 10, width: screen.width - 40, marginLeft: 20, marginRight: 80}}></TextInput>
        </View>
          ),
      });
    } else {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: getHeaderTitle(routeName),
        headerBackground: null,
      });
    }
  };

  render() {
    return (
      <Tab.Navigator
        initialRouteName={HomePage}
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
          name={'Listen'}
          component={Setting}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={focused ? require('../images/bar/icon-index-select.png') : require('../images/bar/icon-index.png')}
                    style={{width: 32, height: 32}}/>
            ),
          }}
        />
        <Tab.Screen
          name={'Found'}
          component={Setting}
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
          component={Setting}
          options={{
            tabBarLabel: '我的',
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
