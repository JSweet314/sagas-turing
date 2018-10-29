import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/';
import BoilerPlateView from '../../components/BoilerPlateView';

export class BoilerPlateContainer extends Component {
  static propTypes = {
    testMiddleware: PropTypes.func.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string
    }).isRequired,
    error: PropTypes.string
  };

  state = {
    inputValue: ''
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  handleOnClick = event => {
    event.preventDefault();
    this.props.testMiddleware(this.state.inputValue);
  };

  render() {
    const { user, error } = this.props;

    return (
      <BoilerPlateView
        user={user}
        error={error}
        {...this.state}
        handleOnClick={this.handleOnClick}
        handleOnChange={this.handleOnChange}
      />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  testMiddleware: gitHubUsername =>
    dispatch(actions.getUserInfo(gitHubUsername))
});

export const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerPlateContainer);
