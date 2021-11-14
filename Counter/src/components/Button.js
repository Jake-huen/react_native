import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity;
const Icon = styled.Image``;

interface Props {
  iconName: 'plus' | 'minus';
  onPress?: () => void;
}
const Button = () => {
  return <div></div>;
};

export default Button;
