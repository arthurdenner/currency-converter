import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ClearButton = ({ onPress, text }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        source={require('./images/icon.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ClearButton.defaultProps = {
  onPress: () => {},
};

export default ClearButton;
