import { combineReducers } from 'redux';
import taskFormModalReducer from './taskFormModalReducer.js';

const reducers = combineReducers({
  isOpen: taskFormModalReducer,
});

export default reducers;
