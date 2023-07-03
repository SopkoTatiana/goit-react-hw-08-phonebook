import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setContact = createAsyncThunk(
  '/contacts/setContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/contacts/login',
  async (data, thunkAPI) => {
    try {
      const user = await axios.post('/users/login', data);
      setToken(user.data.token);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  '/contacts/logout',
  async (_, thunkAPI) => {
    try {
      const user = await axios.post('/users/logout');
      unsetToken();
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signup = createAsyncThunk(
  '/auth/signup',
  async (data, thunkAPI) => {
    try {
      const user = await axios.post('/users/signup', data);
      setToken(user.data.token);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Необхідно авторизуватися');
    }

    setToken(persistedToken);
    try {
      const user = await axios.get('/users/current');
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
