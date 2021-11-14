import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
export default function App() {
  const handlePress = () => console.log('Text Pressed');
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Practice App</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>
        <Image
          source={{
            uri: 'http://ecampus.konkuk.ac.kr/ilos/images/themes/darkgreen/message.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
