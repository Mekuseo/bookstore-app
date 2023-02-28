import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Book from '../Book';
import Form from '../Form';

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
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onRemove={() => handleRemove(book.id)}
        />
      ))}
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default Books;
