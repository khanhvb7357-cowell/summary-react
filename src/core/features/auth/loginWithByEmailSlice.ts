import { createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { createReduxSlice } from '../../redux/reduxCommon';
import { RootState } from '../../redux/rootReducer';
import { UserLoginParams, UserLoginResponse } from './auth.service';
import * as services from './auth.service';

export const loginWithByEmailSlice = createReduxSlice<UserLoginParams>('loginByEmail');

export const {
  request: loginWithByEmail,
  success: loginWithByEmailSuccess,
  failure: loginWithByEmailFailure,
  reset: resetToken,
} = loginWithByEmailSlice.actions;

export const loginWithByEmailSelector = createSelector(
  (state: RootState) => state.auth.user,
  (item: any) => item
);
// export const loginByEmail = createAsyncThunk<UserLoginResponse, UserLoginParams>(
//   'loginByEmail/request',
//   async (loginParam, { rejectWithValue }) => {
//     try {
//       console.log('call api');
//       const res = await services.login(loginParam);
//       return res;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
