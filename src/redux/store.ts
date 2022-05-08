
import { configureStore } from '@reduxjs/toolkit';

import  itemsReducer  from './items/slice';
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
  reducer: {
    items: itemsReducer
  },
  middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


