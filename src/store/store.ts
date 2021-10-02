import { configureStore } from '@reduxjs/toolkit';
import { experience } from 'src/store/experience';
import { token } from './token';
import { energy } from './energy';

export const store = configureStore({
  reducer: {
    token,
    energy,
    experience,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
