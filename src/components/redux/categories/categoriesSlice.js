// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state, action) => ({
      ...state,
      status: action.payload,
    }),
  },
});

export const { setStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
