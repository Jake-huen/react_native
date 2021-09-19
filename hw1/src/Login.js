import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.eachView}>
        <Text>This is login</Text>
        <Button
          title="Go to SignUp Page"
          onPress={() => this.props.navigation.navigate('SignUp')}
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
export default Login;
