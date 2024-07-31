import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './Epics/Epicindex';
import authReducer from './MasterSlice/UserSlice';
import imageReducer from './MasterSlice/ImageSlice';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
