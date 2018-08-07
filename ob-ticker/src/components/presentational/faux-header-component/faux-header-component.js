import React from 'react';
import obLogo from '../../../images/openbazaar-logo.png';

const FauxHeaderComponent = () => (
  <header className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="">
        <img className="openbazaar-logo" alt="openbazaar logo" src={obLogo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-top"
        aria-controls="navbar-top"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" /> Menu
      </button>
      <div
        className="collapse navbar-collapse text-center text-lg-left"
        id="navbar-top"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-md-2 active">
            <a className="nav-link" href="">
              Ticker API
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a className="nav-link" href="https://www.openbazaar.org/features/">
              Features
            </a>
          </li>
          <li className="nav-item ml-md-2 {% if current[1] == 'applications' %}active {% endif %}">
            <a className="nav-link" href="">
              Applications
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a className="nav-link" href="https://api.openbazaar.org/">
              API
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a className="nav-link" href="">
              Developers
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a className="nav-link" href="">
              Support
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a className="nav-link" href="/blog/">
              Blog
            </a>
          </li>
          <li className="nav-item ml-md-2">
            <a
              href="{{site.baseurl}}/mobile-updates/"
              className="button small download d-lg-none"
            >
              Get It for Desktop
            </a>
            <a
              href="{{site.baseurl}}/download/"
              className="button small download d-none d-lg-inline-flex"
            >
              DOWNLOAD
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default FauxHeaderComponent;
