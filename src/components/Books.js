import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './AddNewBooks';
import Book from './Book';
import { getBooks } from './redux/books/books';
import '../App.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="book-container">
      <Book books={books} />
      <AddNewBook />
    </div>
  );
};

export default Books;
