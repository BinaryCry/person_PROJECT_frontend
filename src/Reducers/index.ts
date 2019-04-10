import { combineReducers } from 'redux';
import yesno from './yesno';
import fibo from './fibo';

const reducers = combineReducers({
  yesno,
  fibo
});

export default reducers;