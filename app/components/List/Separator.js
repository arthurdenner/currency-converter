import { StyleSheet } from 'react-native';
import styled from 'styled-components';

const Separator = styled.View`
  margin-left: 20;
  flex: 1;
  height: ${StyleSheet.hairlineWidth};
  background-color: ${props => props.theme.border || '#E2E2E2'};
`;

export default Separator;
