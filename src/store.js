import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './reducers/habits'

export const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
