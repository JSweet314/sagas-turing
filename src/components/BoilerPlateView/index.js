import React from 'react';
import {func, string, shape } from 'prop-types';

export const BoilerPlateView = ({
  handleOnClick,
  handleOnChange,
  inputValue,
  user,
  error
}) => (
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
    <input
      value={inputValue}
      onChange={event => handleOnChange(event)}
      placeholder="GitHub Username"
      name="inputValue"
    />
    <button onClick={event => handleOnClick(event)}>Test Middleware</button>
    <p>{error || user.login}</p>
  </div>
);

BoilerPlateView.propTypes = {
  handleOnClick: func.isRequired,
  handleOnChange: func.isRequired,
  user: shape({
    login: string
  }).isRequired,
  error: string
};

export default BoilerPlateView;
