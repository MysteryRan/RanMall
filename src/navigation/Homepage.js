import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
// import Home from '@/pages/Home';

import Home from './Home'
import TopChoosen from '../screen/TopChoosen'

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends React.Component {

  renderTabBar = () => {
    return <Text>10010</Text>;
  };

  render() {
    return (
      <Tab.Navigator
        lazy={true}
        // tabBar={this.renderTabBar}
        sceneContainerStyle={styles.sceneContainerStyle}
        tabBarOptions={{
            scrollEnabled: true,
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            pressOpacity: 1,
            tabStyle: {
              height: 50,
              justifyContent: "center",
              paddingLeft: 10,
              paddingRight: 10,
              width: "auto",
            },
            indicatorStyle: {
              backgroundColor: 'white',
            },
            style: {
              backgroundColor: '#FF5E87',
            },
        }}>
        <Tab.Screen
          name="home"
          component={TopChoosen}
          options={{tabBarLabel: '精选'}}
        />
      <Tab.Screen name="home1" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home2" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home3" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home4" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home5" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home6" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home7" component={Home} options={{ tabBarLabel:'推荐'}}/>
      <Tab.Screen name="home8" component={Home} options={{ tabBarLabel:'推荐'}}/>
      
        {/* <Tab.Screen name="home1" component={Home} options={{ tabBarLabel:'推荐'}}/>
                <Tab.Screen name="home2" component={Home} options={{ tabBarLabel:'推荐'}}/>
                <Tab.Screen name="home3" component={Home} options={{ tabBarLabel:'推荐'}}/> */}
      </Tab.Navigator>
    );
  }
}

const styles=StyleSheet.create({
  sceneContainerStyle:{backgroundColor:'transparent'}
})

export default HomeTabs;
