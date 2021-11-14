import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Feed from './Feed';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Feed: {
      screen: Feed,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Feed') {
          iconName = 'ios-chatboxes';
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
  },
);

export default createAppContainer(TabNavigator);
