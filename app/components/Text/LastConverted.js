import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';

const SmallText = styled.Text`
  text-align: center;
  font-size: 12;
  color: #ffffff;
`;

const LastConverted = ({ base, quote, conversionRate, date }) => (
  <SmallText>
    1 {base} = {conversionRate} {quote} as of {format(date, 'MMMM DD, YYYY')}
  </SmallText>
);

LastConverted.propTypes = {
  base: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  quote: PropTypes.string.isRequired,
};

export default LastConverted;
