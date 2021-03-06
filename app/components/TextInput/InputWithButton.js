import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const Container = styled.View`
  background-color: ${props =>
    !props.editable ? props.theme.disabled : props.theme.white};
  width: 90%;
  height: ${INPUT_HEIGHT};
  margin: 11px 0;
  border-radius: ${BORDER_RADIUS};
  flex-direction: row;
  align-items: center;
`;

const ButtonContainer = styled.TouchableHighlight`
  height: ${INPUT_HEIGHT};
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  border-top-left-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
`;

const ButtonText = styled.Text`
  padding-horizontal: 16;
  font-size: 20;
  font-weight: 600;
  color: ${props => props.textColor};
`;

const Border = styled.View`
  height: ${INPUT_HEIGHT};
  width: ${StyleSheet.hairlineWidth};
  background-color: ${props => props.theme.lightGray};
`;

const TextInput = styled.TextInput`
  height: ${INPUT_HEIGHT};
  padding: 0 8px;
  color: ${props => props.theme.gray};
  font-size: 18;
  flex: 1;
`;

const InputWithButton = ({
  buttonText,
  editable,
  onPress,
  textColor,
  theme,
  ...rest
}) => (
  <Container editable={editable}>
    <ButtonContainer underlayColor={theme.lightGray} onPress={onPress}>
      <ButtonText textColor={textColor}>{buttonText}</ButtonText>
    </ButtonContainer>
    <Border />
    <TextInput
      {...rest}
      editable={editable}
      underlineColorAndroid="transparent"
    />
  </Container>
);

InputWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
  textColor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

InputWithButton.defaultProps = {
  editable: true,
  onPress: () => {},
};

export default withTheme(InputWithButton);
