
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getData } from '../requests';

export const getItems = createAsyncThunk(
    'items', 
    async () => {
      const response = await getData('items');
      return response.data;
});
  