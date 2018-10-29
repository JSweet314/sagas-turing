import React from 'react';
import PropTypes from 'prop-types';

export const BoilerPlateView = ({ handleOnClick, user, error }) => (
  <div>
    <h1>React/Redux Boilerplate</h1>
    <p>Includes:</p>
    <ul>
      <a
        href="https://github.com/reduxjs/redux"
        target="_blank"
        rel="noopener noreferrer">
        <li>Redux</li>
      </a>
      <a
        href="https://github.com/redux-saga/redux-saga"
        target="_blank"
        rel="noopener noreferrer">
        <li>Redux-Saga Middleware</li>
      </a>
      <li>
        Testing w/{' '}
        <a
          href="https://github.com/facebook/jest"
          target="_blank"
          rel="noopener noreferrer">
          Jest
        </a>{' '}
        +{' '}
        <a
          href="https://github.com/airbnb/enzyme"
          target="_blank"
          rel="noopener noreferrer">
          Enzyme
        </a>
      </li>
    </ul>
    <p>
      This app is bootstrapped on top of{' '}
      <a
        href="https://github.com/facebook/create-react-app"
        target="_blank"
        rel="noopener noreferrer">
        Create-React-App
      </a>
    </p>
    <button onClick={() => handleOnClick('jsweet314')}>Test Middleware</button>
    <button onClick={() => handleOnClick('')}>Test Middleware Failure</button>
    <p>{error || user.login}</p>
  </div>
);

BoilerPlateView.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string
  }).isRequired,
  error: PropTypes.string
};

export default BoilerPlateView;
