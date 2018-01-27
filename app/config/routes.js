import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: 'Options',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        title: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  }
);

// const CurrencyStack = StackNavigator({
//   CurrencyList: {
//     screen: CurrencyList,
//     navigationOptions: ({ navigation }) => ({
//       title: navigation.state.params.title,
//     }),
//   },
// });

const Navigation = StackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
  }
);

export default Navigation;
