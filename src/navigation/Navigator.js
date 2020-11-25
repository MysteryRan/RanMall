import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';

// import Detils from '@/pages/Detils';
// import BottomTabs from './BottomTabs';
// import Category from '@/pages/Category/index';

import Setting from './Home'
import BottomTabs from './BottomTab';

const Stack = createStackNavigator();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen
            options={{
              title: '首页',
              headerTitleAlign: 'center',
              headerTitle: '首页',
            }}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{
              title: '分类',
              headerTitleAlign: 'center',
              headerTitle: '分类',
            }}
            name="Category"
            component={Setting}
          />
          <Stack.Screen name="Detils" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
