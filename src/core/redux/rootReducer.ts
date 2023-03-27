import { combineReducers } from '@reduxjs/toolkit';
import { loginSlice } from '../features/customer/login/loginSlice';
import { logoutSlice } from '../features/customer/logout/logoutSlice';

const customerReducer = combineReducers({
  login: loginSlice.reducer,
  logout: logoutSlice.reducer,
});

const rootReducer = combineReducers({
  //   router: connectRouter(history),
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
