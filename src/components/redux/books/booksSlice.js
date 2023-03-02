/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Science',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: initialBooks },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
      return state;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
