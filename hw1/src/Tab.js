import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Tab extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text>This is Tab</Text>
        <Button
          title="Go to Login Page"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to SignUp Page"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eachView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Tab;
