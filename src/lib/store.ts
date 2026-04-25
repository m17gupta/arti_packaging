import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './slice/collection/collectionSlice';
import userReducer from './slice/users/userSlice';

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
