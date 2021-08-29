export const open = () => {
  console.log('a');
  return {
    type: 'open',
  };
};
export const close = () => {
  return {
    type: 'close',
  };
};
