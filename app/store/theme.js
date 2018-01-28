export const initialState = {
  primaryColor: '#4F6D7A',
  colors: [
    { name: 'Blue', color: '#4F6D7A' },
    { name: 'Maroon', color: '#85144B' },
    { name: 'Navy ', color: '#001F3F' },
    { name: 'Orange', color: '#FFA000' },
    { name: 'Purple', color: '#9E768F' },
    { name: 'Teal', color: '#00BD9D' },
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
