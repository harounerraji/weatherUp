import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import TimeToDestination from './components/TimeToDestination';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator(
  {
    Search: { screen: Search },
    TimeToDestination: { screen: TimeToDestination },
    About: { screen: About },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      iconStyle: {
        width: 40,
        height: 30
      },
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#35a894',
      indicatorStyle: {
        backgroundColor: '#3583a8'
      },
      style: {
        backgroundColor: '#3BB8A2',
      }
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
