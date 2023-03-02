/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from 'react-bootstrap/Button';
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

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Books</h2>
      <BookList books={books} onRemove={handleRemove} />
      <Form onSubmit={handleSubmit} />
      <AddBookButton />
      <Button onClick={() => handleRemove(books[0].id)}>Remove first book</Button>
    </div>
  );
}

export default Books;
