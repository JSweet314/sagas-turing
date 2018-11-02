export const getUserInfo = gitHubUsername => ({
  type: 'GET_USER_INFO',
  payload: gitHubUsername,
});

export const userInfoSuccess = payload => ({
  type: 'USER_INFO_SUCCESS',
  payload,
});

export const userInfoFailure = payload => ({
  type: 'USER_INFO_FAILURE',
  payload,
});
