import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Container = ({ backgroundColor, children }) => {
  const containerStyles = [styles.container, { backgroundColor }];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
