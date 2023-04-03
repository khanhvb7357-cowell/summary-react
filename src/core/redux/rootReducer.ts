import { combineReducers } from '@reduxjs/toolkit';
import { loginWithByEmailSlice } from '../features/auth/loginWithByEmailSlice';
// import { loginSlice } from '../features/customer/login/loginSlice';
// import { logoutSlice } from '../features/customer/logout/logoutSlice';

// const customerReducer = combineReducers({
//   // login: loginSlice.reducer,
//   // logout: logoutSlice.reducer,
// });
const auth = combineReducers({
  user: loginWithByEmailSlice.reducer,
});

const rootReducer = combineReducers({
  //   router: connectRouter(history),
  // customer: customerReducer,
  auth: auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
