import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Text } from 'react-native';
import styles from './styles';

const LastConverted = ({ base, quote, conversionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {format(date, 'MMMM DD, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  base: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  quote: PropTypes.string.isRequired,
};

export default LastConverted;
