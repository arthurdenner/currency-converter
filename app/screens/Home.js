import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'redux-zero/react';
import {
  connectAlert,
  ClearButton,
  Container,
  Header,
  InputWithButton,
  LastConverted,
  Logo,
} from '../components';
import { actions as currenciesActions } from '../store/currencies';
import {
  getConversionData,
  getConversionRate,
  getLastConvertedDate,
  getQuotePrice,
} from '../selectors/currencies';

class Home extends Component {
  static propTypes = {
    alertWithType: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    changeAmount: PropTypes.func.isRequired,
    conversionRate: PropTypes.number.isRequired,
    currencyError: PropTypes.string,
    getInitialConversionRate: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.instanceOf(Date).isRequired,
    navigation: PropTypes.object.isRequired,
    primaryColor: PropTypes.string.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
    quotePrice: PropTypes.string.isRequired,
    swapCurrency: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currencyError: null,
    isFetching: false,
  };

  componentWillMount() {
    const { getInitialConversionRate } = this.props;

    getInitialConversionRate();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currencyError &&
      nextProps.currencyError !== this.props.currencyError
    ) {
      const { alertWithType, currencyError } = nextProps;

      alertWithType('error', 'Error', currencyError);
    }
  }

  handlePressBaseCurrency = () => {
    const { navigation: { navigate } } = this.props;

    navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'baseCurrency',
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation: { navigate } } = this.props;

    navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quoteCurrency',
    });
  };

  handleBaseAmount = amount => {
    const { changeAmount } = this.props;

    changeAmount(amount);
  };

  handleSwapCurrency = () => {
    const { swapCurrency } = this.props;

    swapCurrency();
  };

  handleOptionsPress = () => {
    const { navigation: { navigate } } = this.props;

    navigate('Options');
  };

  render() {
    const {
      amount,
      baseCurrency,
      conversionRate,
      isFetching,
      lastConvertedDate,
      primaryColor,
      quoteCurrency,
      quotePrice,
    } = this.props;

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar barStyle="light-content" translucend={false} />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            keyboardType="numeric"
            onChangeText={this.handleBaseAmount}
            onPress={this.handlePressBaseCurrency}
            textColor={primaryColor}
            value={amount.toString()}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            textColor={primaryColor}
            value={isFetching ? '...' : quotePrice}
          />
          <LastConverted
            base={baseCurrency}
            conversionRate={conversionRate}
            date={lastConvertedDate}
            quote={quoteCurrency}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = ({ currencies, theme }) => ({
  amount: currencies.amount,
  baseCurrency: currencies.baseCurrency,
  conversionRate: getConversionRate(currencies),
  currencyError: currencies.error,
  isFetching: getConversionData(currencies).isFetching,
  lastConvertedDate: getLastConvertedDate(currencies),
  primaryColor: theme.primaryColor,
  quoteCurrency: currencies.quoteCurrency,
  quotePrice: getQuotePrice(currencies),
});

export default connect(mapStateToProps, currenciesActions)(connectAlert(Home));
