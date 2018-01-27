export const initialState = {
  primaryColor: '#4F6D7A',
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
