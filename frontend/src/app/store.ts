import {configureStore} from '@reduxjs/toolkit';
import dicomViewerReducer from '../features/dicom/slice.ts';
import authReducer from '../features/auth/slice.ts';

export const store = configureStore({
  reducer: {
    dicomViewer: dicomViewerReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;