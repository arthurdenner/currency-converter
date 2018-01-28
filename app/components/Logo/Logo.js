import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Animated,
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
} from 'react-native';

const isAndroid = Platform.OS === 'android';
const deviceWidth = Dimensions.get('window').width / 2;
const LARGE_CONTAINER = deviceWidth;
const LARGE_IMAGE = deviceWidth / 2;
const SMALL_CONTAINER = deviceWidth / 2;
const SMALL_IMAGE = deviceWidth / 4;
const ANIMATION_DURATION = 200;

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LogoContainer = styled.View`
  align-items: center;
`;

const LogoText = styled.Text`
  font-size: 28;
  font-weight: 600;
  letter-spacing: -0.5;
  margin-top: 15;
  color: #ffffff;
`;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  state = {
    containerImageWidth: new Animated.Value(LARGE_CONTAINER),
    imageWidth: new Animated.Value(LARGE_IMAGE),
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
        toValue: SMALL_CONTAINER,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: SMALL_IMAGE,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: LARGE_CONTAINER,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: LARGE_IMAGE,
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

    return (
      <LogoContainer>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={{ width: imageWidth, tintColor }}
          />
        </Animated.View>
        <LogoText>Currency Converter</LogoText>
      </LogoContainer>
    );
  }
}

export default Logo;
