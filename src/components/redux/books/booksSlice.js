// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      return {
        ...state,
        books: [...state.books, book],
      };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
