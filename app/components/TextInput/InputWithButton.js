import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = ({
  buttonText,
  editable,
  onPress,
  textColor,
  ...rest
}) => {
  const buttonTextStyles = [styles.buttonText, { color: textColor }];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        {...rest}
        editable={editable}
        style={styles.input}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  textColor: PropTypes.string.isRequired,
};

InputWithButton.defaultProps = {
  editable: true,
  onPress: () => {},
};

export default InputWithButton;
