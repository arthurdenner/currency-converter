export const initialState = {
  primaryColor: '#4F6D7A',
  colors: [
    {
      name: 'Blue',
      color: '#4F6D7A',
    },
    {
      name: 'Orange',
      color: '#D57A66',
    },
    {
      name: 'Green',
      color: '#00BD9D',
    },
    {
      name: 'Purple',
      color: '#9E768F',
    },
  ],
};

export const actions = store => ({
  changePrimaryColor: ({ theme }, action) => {
    store.setState({
      theme: {
        ...theme,
        primaryColor: action,
      },
    });
  },
});
