import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './Home';
import Feed from './Feed';
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Feed: {
    screen: Feed,
  },
});

// class Main extends Component {
//   render() {
//     return (
//       <View style={styles.eachView}>
//         <Text>This is Main</Text>
//         <Button
//           title="Go to Login Page"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//         <Button
//           title="Go to SignUp Page"
//           onPress={() => this.props.navigation.navigate('SignUp')}
//         />
//       </View>
//     );
//   }
// }

export default createAppContainer(TabNavigator);
