const reducer = (state = true, action) => {
  console.log('in');
  switch (action.type) {
    case 'open':
      console.log('op');
      return true;
    case 'close':
      return false;
    default:
      console.log('def');
      return false;
  }
};

export default reducer;
