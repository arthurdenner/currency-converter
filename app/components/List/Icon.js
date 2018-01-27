import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import styles from './styles';

const Icon = ({ backgroundColor, checkmark, visible }) => {
  const iconStyles = [styles.icon];

  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  if (backgroundColor) {
    iconStyles.push({ backgroundColor });
  }

  return (
    <View style={iconStyles}>
      {checkmark && (
        <Image
          resizeMode="contain"
          source={require('./images/check.png')}
          style={styles.checkIcon}
        />
      )}
    </View>
  );
};

Icon.propTypes = {
  backgroundColor: PropTypes.string,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

Icon.defaultProps = {
  backgroundColor: '',
  checkmark: true,
  visible: true,
};

export default Icon;
