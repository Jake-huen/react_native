import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import SignUp from './SignUp';
import Tab from './Tab';

const App = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
    Tab: {
      screen: Tab,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(App);

export default () => <AppContainer />;
const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
