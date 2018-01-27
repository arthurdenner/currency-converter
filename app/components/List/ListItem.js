import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableHighlight } from 'react-native';
import Icon from './Icon';

const ListRow = styled.View`
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

const ListText = styled.Text`
  font-size: 16;
  color: #343434;
`;

const ListItem = ({ customIcon, onPress, selected, text, ...rest }) => (
  <TouchableHighlight underlayColor="#E2E2E2" onPress={onPress}>
    <ListRow>
      <ListText>{text}</ListText>
      {selected && <Icon {...rest} />}
      {customIcon}
    </ListRow>
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
