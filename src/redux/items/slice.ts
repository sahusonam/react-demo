import { createSlice } from '@reduxjs/toolkit'
import { getItems } from './thunk';
import { ItemState } from './types';

export const initialItemState: ItemState = {
    itemsList: [],
    status: 'idle'
};
const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItemState,
    reducers: {
      // omit reducer cases
      setStateStatus: (state,action)=>{
        state.status= action.payload;
      }
    },
    extraReducers: builder => {
      builder
        .addCase(getItems.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getItems.fulfilled, (state, action) => {
          state.itemsList = action.payload;
          state.status = 'success';
        })

        .addCase(getItems.rejected, (state, action) => {
          state.status = 'failure'
        })

    }
  })

  export const { setStateStatus } = itemsSlice.actions;
  export default itemsSlice.reducer;