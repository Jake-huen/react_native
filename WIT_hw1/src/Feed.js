import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
class Feed extends React.Component {
  render() {
    return (
      <View style={styles.tabcontainer}>
        <Text>Feed</Text>
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
export default Feed;
