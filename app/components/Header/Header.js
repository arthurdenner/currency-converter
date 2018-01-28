import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Platform, StatusBar } from 'react-native';

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: ${Platform.OS === 'ios'
    ? '20px'
    : `${StatusBar.currentHeight}px`};
`;

const Button = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 5px 20px;
`;

const Icon = styled.Image`
  width: 16;
`;

const Header = ({ onPress }) => (
  <Container>
    <Button onPress={onPress}>
      <Icon resizeMode="contain" source={require('./images/gear.png')} />
    </Button>
  </Container>
);

Header.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Header;
