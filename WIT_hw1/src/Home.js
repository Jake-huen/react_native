import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
class Home extends React.Component {
  render() {
    return (
      <View style={styles.tabcontainer}>
        <Text>Home</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
