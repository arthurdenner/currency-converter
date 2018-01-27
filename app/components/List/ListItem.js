import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';
import Icon from './Icon';

import styles from './styles';

const ListItem = ({ customIcon, onPress, selected, text, ...rest }) => (
  <TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected && <Icon {...rest} />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  customIcon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  customIcon: null,
  selected: false,
};

export default ListItem;
