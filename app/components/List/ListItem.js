import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { TouchableHighlight } from 'react-native';
import Icon from './Icon';

const ListRow = styled.View`
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.white};
`;

const ListText = styled.Text`
  font-size: 16;
  color: ${props => props.theme.darkestGray};
`;

const ListItem = ({ customIcon, onPress, selected, text, theme, ...rest }) => (
  <TouchableHighlight underlayColor={theme.lightGray} onPress={onPress}>
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
  theme: PropTypes.object.isRequired,
};

ListItem.defaultProps = {
  customIcon: null,
  selected: false,
};

export default withTheme(ListItem);
