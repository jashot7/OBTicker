import { combineReducers } from 'redux';
import TickerReducer from './ticker-reducer';

const rootReducer = combineReducers({
  tickerData: TickerReducer
});

export default rootReducer;
