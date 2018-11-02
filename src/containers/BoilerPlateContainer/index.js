import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, string, shape } from 'prop-types';
import * as actions from '../../actions/';
import BoilerPlateView from '../../components/BoilerPlateView';

export class BoilerPlateContainer extends Component {
  static propTypes = {
    testMiddleware: func.isRequired,
    user: shape({
      login: string
    }).isRequired,
    error: string
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
    const { user, error, headlines } = this.props;

    return (
      <BoilerPlateView
        user={user}
				error={error}
				headlines={headlines}
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
	headlines: state.headlines,
  error: state.user.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerPlateContainer);
