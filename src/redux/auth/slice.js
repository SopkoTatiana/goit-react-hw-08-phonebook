import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const { createSlice } = require('@reduxjs/toolkit');
const { login, signup, logout, refreshUser } = require('redux/operations');

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLogedIn: false,
  isFetchingCurrentUser: false,
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
    [refreshUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLogedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [refreshUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const selectIsLogedIn = state => state.auth.isLogedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
