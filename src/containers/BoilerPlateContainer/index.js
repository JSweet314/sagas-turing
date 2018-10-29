import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../actions/';
import BoilerPlateView from '../../components/BoilerPlateView';

export const BoilerPlateContainer = props => <BoilerPlateView {...props} />;

export const mapDispatchToProps = dispatch => ({
  testMiddleware: gitHubUsername => dispatch(getUserInfo(gitHubUsername))
});

export const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerPlateContainer);
