/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, fetchBooksAsync } from '../redux/books/booksSlice';
import Form from '../Form';
import BookList from '../BookList';
import AddBookButton from '../AddBookButton';

function Books() {
  const books = useSelector((state) => state.books.books) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const handleSubmit = (title, author) => {
    const id = Math.floor(Math.random() * 100000);
    dispatch(addBook({ id, title, author }));
  };

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Books</h2>
      <BookList books={books} onRemove={handleRemove} />
      <Form onSubmit={handleSubmit} />
      <AddBookButton />
    </div>
  );
}

export default Books;
