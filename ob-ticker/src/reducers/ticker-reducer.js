import { GET_TICKER_ITEMS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case GET_TICKER_ITEMS:
      return action.payload;

    default:
      return state;
  }
}
