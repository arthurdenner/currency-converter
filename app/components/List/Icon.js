import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  width: 30;
  height: 30;
  background-color: ${props => props.backgroundColor};
  border-radius: 15;
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled.Image`
  width: 16;
`;

const Icon = ({ checkmark, ...rest }) => (
  <Container {...rest}>
    {checkmark && (
      <CheckIcon resizeMode="contain" source={require('./images/check.png')} />
    )}
  </Container>
);

Icon.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  checkmark: PropTypes.bool,
};

Icon.defaultProps = {
  checkmark: true,
};

export default Icon;
