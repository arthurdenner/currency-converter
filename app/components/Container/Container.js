import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`;

const AppContainer = ({ backgroundColor, children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container backgroundColor={backgroundColor}>{children}</Container>
  </TouchableWithoutFeedback>
);

AppContainer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppContainer;
