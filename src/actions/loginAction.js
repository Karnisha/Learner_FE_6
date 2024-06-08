export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS_ADMIN = 'LOGIN_SUCCESS_ADMIN';
export const LOGIN_SUCCESS_USER = 'LOGIN_SUCCESS_USER'
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = (login) =>
({
  type: LOGIN_REQUEST,
  payload: login

});

export const loginSuccessuser = (user) => ({
  type: LOGIN_SUCCESS_USER,
  payload: user
});


export const loginSuccessadmin = (user) =>
({
  type: LOGIN_SUCCESS_ADMIN,
  payload: user,

});

export const loginError = (error) =>
({
  type: LOGIN_ERROR,
  payload: error

});

