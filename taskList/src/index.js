import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import Dashboard from './components/Dashboard';

import { Paper } from '@material-ui/core';

ReactDOM.render(
  <Provider store={store}>
    <Paper variant="outlined" style={{ backgroundColor: '#f5f5f5' }}>
      <Dashboard />
    </Paper>
  </Provider>,
  document.getElementById('root')
);
