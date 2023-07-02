const { createSlice } = require('@reduxjs/toolkit');
const { login, signup, logout } = require('redux/operations');

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled](state, action) {
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [signup.fulfilled](state, action) {
      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const selectIsLogedIn = state => state.auth.isLogedIn;

export const selectUserName = state => state.auth.user.name;
