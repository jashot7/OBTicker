import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './ticker-container.css';
import { getTickerData } from '../../actions';
import { bindActionCreators } from 'redux';

import getVisibleTickerData from '../../selectors/';

import CryptoItemComponent from '../../components/presentational/crypto-item-component/crypto-item-component';

class TickerContainer extends Component {
  constructor(props) {
    console.log('constructiore ( ;D )'); // humoring mg.
    super(props);

    this.state = {
      term: '',
      currentlyDisplayed: this.props.tickerData
    };

    this.renderTicker = this.renderTicker.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillMount() {
    this.props.getTickerData();
  }

  renderTicker(order, item) {
    return (
      <Fragment key={item.symbol}>
        <CryptoItemComponent
          key={item}
          order={order}
          symbol={item.symbol}
          value={item.value}
        />
      </Fragment>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value.toUpperCase()
    });
  }

  getCurrentDisplayedItems() {
    const term = this.state.term.toUpperCase();
    if (term) {
      return this.props.tickerData.filter(item => item.symbol.startsWith(term));
    } else {
      return this.props.tickerData;
    }
  }

  renderLoadingMessage() {
    if (this.props.tickerData == null) {
      return <div className="p-1 text-center">Loading...</div>;
    }
  }

  renderCryptoItems() {
    if (this.props.visibleTickerData != null) {
      return (
        <Fragment>
          <div className="p-1 text-center m-3">
            <form>
              <input
                placeholder="Filter symbols by..."
                className="p-3"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </form>
          </div>
          <div className="ticker-container col-12">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <span className="p-1">Value Ranking</span>
                </div>
                <div className="col-sm justify-content-end text-right">
                  1 BTC =
                </div>
              </div>
            </div>
            {this.getCurrentDisplayedItems().map((x, index) =>
              this.renderTicker(index + 1, x)
            )}
          </div>
        </Fragment>
      );
    }
  }
  render() {
    return (
      <main className="page-content" aria-label="Content">
        <div className="wrapper content">
          <div className="container limited">
            <div className="col-12 text-left">
              <section className="row">
                <div className="col-12 text-left">
                  <div className="text-center">
                    <h3 className="subtitle subtitle-smaller">
                      The Ticker API provides the crypto symbols available for
                      trading in OpenBazaar.
                    </h3>
                    <h1 className="title">Ticker API</h1>
                    <hr className="title-separator" />
                  </div>
                  <p className="medium mt-5 mb-4 text-center">
                    Filter available symbols and values by typing into the input
                    below.
                  </p>
                  {this.renderLoadingMessage()}
                  {this.renderCryptoItems()}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickerData: state.tickerData,
    visibleTickerData: getVisibleTickerData(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTickerData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TickerContainer);
