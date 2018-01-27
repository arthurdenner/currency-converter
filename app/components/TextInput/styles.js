import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '600',
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    height: INPUT_HEIGHT,
    paddingHorizontal: 8,
    color: '$inputText',
    fontSize: 18,
    flex: 1,
  },
});

export default styles;
