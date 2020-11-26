import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {View, TextInput, Dimensions} from 'react-native'

import Setting from './Home'
import BottomTabs from './BottomTab';
import ProduceDetail from '../screen/ProductDetial'

const Stack = createStackNavigator();

const screen = Dimensions.get('window')

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
              title: '',
              headerTitleAlign: 'center',
              headerTitle: '',
              headerBackground: () => (
                <View style={{backgroundColor: '#FF5E87', height: '100%', width: '100%', justifyContent: 'center'}}>
                <TextInput placeholder="请输入感兴趣的内容" style={{position: "absolute",backgroundColor: 'white', height: 40,bottom: 10, width: screen.width - 40, marginLeft: 20, marginRight: 80}}></TextInput>
            </View>
              ),
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
          <Stack.Screen name="Detils" component={ProduceDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
