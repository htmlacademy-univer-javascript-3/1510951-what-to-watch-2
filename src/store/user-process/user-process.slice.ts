import {AuthorizationStatus} from '../../enums/AuthorizationStatus.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/name-space.ts';
import {checkAuthStatus, loginUser, logoutUser} from '../api-actions.ts';
import {removeToken, setToken } from '../../services/token.ts';
import {UserProcessState} from '../../types/state.ts';

const initialState: UserProcessState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  hasError: false
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        removeToken();
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload && action.payload.token) {
          setToken(action.payload.token);
          state.user = action.payload;
          state.authorizationStatus = AuthorizationStatus.Auth;
          state.hasError = false;
        }
      })
      .addCase(loginUser.rejected, (state) => {
        removeToken();
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      })
      .addCase(checkAuthStatus.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.hasError = false;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        removeToken();
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      });
  }
});

