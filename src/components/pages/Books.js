/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Form from '../Form';
import BookList from '../BookList';
import AddBookButton from '../AddBookButton';

function Books() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleSubmit = (title, author) => {
    const id = Math.floor(Math.random() * 100000);
    dispatch(addBook({ id, title, author }));
  };

  return (
    <div>
      <h2>Books</h2>
      <BookList books={books} onRemove={(id) => dispatch(removeBook(id))} />
      <Form onSubmit={handleSubmit} />
      <AddBookButton />
    </div>
  );
}

export default Books;
