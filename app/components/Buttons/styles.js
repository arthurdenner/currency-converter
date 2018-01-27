import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
  },
});

export default styles;
