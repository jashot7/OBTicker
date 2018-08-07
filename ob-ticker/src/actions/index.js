import axios from 'axios';
const ROOT_SEARCH_URL = 'https://ticker.openbazaar.org/api';

export const GET_TICKER_ITEMS = 'GET_TICKER_ITEMS';

/*
* Retrieves all of the ticker API data.
*/
export function getTickerData() {
  const url = `${ROOT_SEARCH_URL}`;

  const request = axios.get(url);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      var arr = [];
      var seenSymbols = [];
      for (var key in data) {
        var existing = data[key];

        if (existing.type === 'crypto' && !seenSymbols.includes(key)) {
          var newObj = {
            symbol: key,
            value: existing.last
          };
          arr.push(newObj);
          seenSymbols.push(key);
        }
      }

      const sorted = arr.sort((item1, item2) => {
        return item2.value - item1.value;
      });
      dispatch({ type: GET_TICKER_ITEMS, payload: sorted });
    });
  };
}
