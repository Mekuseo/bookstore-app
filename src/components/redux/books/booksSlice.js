/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import handleAPI from '../apiHandle';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksStart: (state) => {
      state.loading = true;
    },
    fetchBooksSuccess: (state, action) => {
      state.books.push(action.payload);
      state.loading = false;
      state.error = '';
    },
    fetchBooksFailure: (state, action) => {
      state.books = [];
      state.loading = false;
      state.error = action.payload;
    },
    addBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.books.push({
        id: String(id),
        title,
        author,
      });
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const {
  fetchBooks,
  fetchBooksFailure,
  fetchBooksStart,
  fetchBooksSuccess,
  addBook,
  removeBook,
} = booksSlice.actions;

export const fetchBooksAsync = () => async (dispatch) => {
  dispatch(fetchBooksStart());
  try {
    const response = await handleAPI.fetchBooks();
    dispatch(fetchBooksSuccess(response.data));
  } catch (error) {
    dispatch(fetchBooksFailure(error.message));
  }
};

export default booksSlice.reducer;
