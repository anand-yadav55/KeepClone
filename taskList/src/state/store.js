import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  {},
  // composeEnhancers(
  applyMiddleware(thunk)
  // )
);
export default store;
