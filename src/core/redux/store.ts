import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, ThunkAction, Action, EnhancedStore } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['router'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: true, // turn middleware immutable of RTK
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
      }, // turn middleware serializable of RTK
    }).concat(), // add other middleware
  devTools: true, // open React Developer Tools
});
export const persistor = persistStore(store);
console.log('persistor', persistor);

export type StoreType = EnhancedStore<CombinedState<RootState>>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
