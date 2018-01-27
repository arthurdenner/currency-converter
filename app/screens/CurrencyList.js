import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'redux-zero/react';
import { FlatList, StatusBar, View } from 'react-native';
import { actions as currenciesActions } from '../store/currencies';
import { ListItem, Separator } from '../components/List';
import allCurrencies from '../data/currencies';

class CurrencyList extends Component {
  static propTypes = {
    changeCurrency: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    primaryColor: PropTypes.string.isRequired,
    selectedCurrency: PropTypes.string.isRequired,
  };

  handlePress = value => {
    const { changeCurrency, navigation } = this.props;
    const { type } = navigation.state.params;

    changeCurrency({ type, value });

    navigation.goBack(null);
  };

  render() {
    const { primaryColor, selectedCurrency } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={allCurrencies}
          renderItem={({ item }) => (
            <ListItem
              backgroundColor={primaryColor}
              onPress={() => this.handlePress(item)}
              selected={item === selectedCurrency}
              text={item}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ currencies, theme }, { navigation }) => {
  const { type } = navigation.state.params;
  const selectedCurrency = currencies[type];

  return {
    selectedCurrency,
    primaryColor: theme.primaryColor,
  };
};

export default connect(mapStateToProps, currenciesActions)(CurrencyList);
