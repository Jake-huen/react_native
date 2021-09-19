import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class SignUp extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text>This is SignUp</Text>
        <Button
          title="Go to Login Page"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Go to Tab Page"
          onPress={() => this.props.navigation.navigate('Tab')}
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
export default SignUp;
