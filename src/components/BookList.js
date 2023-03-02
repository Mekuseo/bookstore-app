/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/booksSlice';
import Book from './Book';

function BookList({ books, onRemove }) {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BookList;
