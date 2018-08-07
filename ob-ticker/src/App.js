import React, { Component } from 'react';
import './styles/obdotorg-main.css';

import TickerContainer from './containers/ticker/ticker-container';
import FauxHeaderComponent from './components/presentational/faux-header-component/faux-header-component';

// Redux Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="">
          <FauxHeaderComponent />
          <section className="">
            <TickerContainer />
          </section>
        </div>
      </Provider>
    );
  }
}
