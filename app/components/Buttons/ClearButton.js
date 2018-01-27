import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  width: 19px;
  margin-right: 11;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.white || '#FFFFFF'};
`;

const ClearButton = ({ onPress, text }) => (
  <Container onPress={onPress}>
    <Wrapper>
      <Image resizeMode="contain" source={require('./images/icon.png')} />
      <ButtonText>{text}</ButtonText>
    </Wrapper>
  </Container>
);

ClearButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ClearButton.defaultProps = {
  onPress: () => {},
};

export default ClearButton;
