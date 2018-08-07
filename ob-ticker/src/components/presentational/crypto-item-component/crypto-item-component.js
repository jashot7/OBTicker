import React from 'react';
import PropTypes from 'prop-types';
import './crypto-item-component.css';

const CryptoItemComponent = ({ order, symbol, value }) => (
  <div className="crypto-item container">
    <div className="row align-items-center">
      <div className="col-7 col-sm-5">
        <div className="row align-items-center">
          <div className="col-4">
            <div className="row order-col">
              <span>{order}.</span>
              <img
                className="crypto-icon p-1"
                src={`${process.env.PUBLIC_URL}/cryptoIcons/${symbol}-icon.png`}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <span className="p-1">{symbol}</span>
          </div>
        </div>
      </div>
      <div className="col justify-content-end text-right">{value}</div>
    </div>
  </div>
);

CryptoItemComponent.propTypes = {
  order: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default CryptoItemComponent;
