// Store.ts
import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './Epics';
import authReducer from '../Redux/Slice/UserSlice';
import imageReducer from '../Redux/Slice/ImageSlice';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
