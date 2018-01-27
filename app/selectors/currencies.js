export const getConversionData = ({ baseCurrency, conversions }) =>
  conversions[baseCurrency] || {};

export const getConversionRate = ({ quoteCurrency, ...rest }) => {
  const conversion = getConversionData(rest);
  const rates = conversion.rates || {};

  return rates[quoteCurrency] || 0;
};

export const getQuotePrice = ({ amount, ...rest }) => {
  const conversionRate = getConversionRate(rest);

  return (amount * conversionRate).toFixed(2);
};

export const getLastConvertedDate = currencies => {
  const conversionDate = getConversionData(currencies).date;

  return conversionDate ? new Date(conversionDate) : new Date();
};
