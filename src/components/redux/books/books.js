/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v74KU1kb6ATX7KCQFVTz/books/';

// initial State
const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

// Action Creators
const getBooks = () => async (dispatch) => {
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
  dispatch({
    type: GET_BOOKS,
    payload: allBooks,
  });
};

const addBook = (book) => async (dispatch) => {
  const bookToAdd = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  };
  await axios.post(api, bookToAdd);
  dispatch({
    type: ADD_BOOK,
    payload: bookToAdd,
  });
};

const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${api}${id}`);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

// Export
export { addBook, removeBook, getBooks };
export default booksReducer;
