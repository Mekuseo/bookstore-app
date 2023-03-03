/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v74KU1kb6ATX7KCQFVTz/books/';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const allBooks = [];
  const response = await axios.get(api);
  const books = Object.values(response.data);
  const keys = Object.keys(response.data);
  books.forEach((book, index) => {
    allBooks.push({
      id: keys[index],
      title: book[0].title,
      author: book[0].author,
      category: book[0].category,
      completed: Math.floor(Math.random() * 100),
      chapter: Math.floor(Math.random() * 10),
    });
  });
  return allBooks;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const bookToAdd = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  };
  await axios.post(api, bookToAdd);
  return bookToAdd;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${api}${id}`);
  return id;
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const idToRemove = action.payload;
        const index = state.findIndex((book) => book.item_id === idToRemove);
        state.splice(index, 1);
      });
  },
});

export default booksSlice.reducer;
