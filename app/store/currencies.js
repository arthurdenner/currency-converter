const setConversions = ({ conversions }, currency) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (conversions[currency]) {
    conversion = conversions[currency];
  }

  return {
    ...conversions,
    [currency]: conversion,
  };
};

const getLatestRate = async currency => {
  const response = await fetch(`http://api.fixer.io/latest?base=${currency}`);
  const result = await response.json();

  return result;
};

const fetchLatestConversionRates = async (store, currencyToFetch) => {
  try {
    const { currencies } = store.getState();

    store.setState({
      currencies: {
        ...currencies,
        conversions: setConversions(currencies, currencyToFetch),
      },
    });

    const result = await getLatestRate(currencyToFetch);

    if (result.error) {
      store.setState({
        currencies: {
          ...currencies,
          error: result.error,
        },
      });
    } else {
      store.setState({
        currencies: {
          ...currencies,
          conversions: {
            ...currencies.conversions,
            [result.base]: result,
          },
        },
      });
    }
  } catch (e) {
    store.setState({ error: e.message });
  }
};

export const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
};

export const actions = store => ({
  swapCurrency: ({ currencies }) => {
    store.setState({
      currencies: {
        ...currencies,
        baseCurrency: currencies.quoteCurrency,
        quoteCurrency: currencies.baseCurrency,
      },
    });

    fetchLatestConversionRates(store, currencies.quoteCurrency);
  },
  changeAmount: ({ currencies }, action) => {
    store.setState({
      currencies: {
        ...currencies,
        amount: parseFloat(action) || 0,
      },
    });
  },
  changeCurrency: ({ currencies }, action) => {
    store.setState({
      currencies: {
        ...currencies,
        [action.type]: action.value,
        conversions: setConversions(currencies, action.value),
      },
    });

    if (action.type === 'baseCurrency') {
      fetchLatestConversionRates(store, action.value);
    }
  },
  getInitialConversionRate: ({ currencies }) =>
    fetchLatestConversionRates(store, currencies.baseCurrency),
});
