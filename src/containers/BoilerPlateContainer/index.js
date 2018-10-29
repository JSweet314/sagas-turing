import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import BoilerPlateView from '../../components/BoilerPlateView';

export const BoilerPlateContainer = props => <BoilerPlateView {...props} />;

export const mapDispatchToProps = dispatch => ({
  handleOnClick: gitHubUsername => dispatch(actions.getUserInfo(gitHubUsername))
});

export const mapStateToProps = state => ({
  user: state.user,
  error: state.user.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoilerPlateContainer);
