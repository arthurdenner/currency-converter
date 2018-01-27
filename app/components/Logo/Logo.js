import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const isAndroid = Platform.OS === 'android';
const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  state = {
    containerImageWidth: new Animated.Value(styles.$largeContainerSize),
    imageWidth: new Animated.Value(styles.$largeImageSize),
  };

  componentDidMount() {
    const showListener = isAndroid ? 'keyboardDidShow' : 'keyboardWillShow';
    const hideListener = isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';

    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const { tintColor } = this.props;
    const { containerImageWidth, imageWidth } = this.state;

    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];
    const imageStyles = [styles.logo, { width: imageWidth, tintColor }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={imageStyles}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
