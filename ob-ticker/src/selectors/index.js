import { createSelector } from 'reselect';

const SHOW_ALL = 'SHOW_ALL';
const SHOW_FILTERED = 'SHOW_FILTERED';

const getVisibilityFilter = state => state.visibilityFilter;
const getTickerData = state => state.tickerData;
const getTerm = state => state.term;

const getVisibleTickerData = createSelector(
  [getVisibilityFilter, getTickerData, getTerm],
  (visibilityFilter, tickerData, term) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return tickerData;
      case SHOW_FILTERED:
        return tickerData.filter(i => i.symbol === term);
      default:
        return tickerData;
    }
  }
);

export default getVisibleTickerData;
