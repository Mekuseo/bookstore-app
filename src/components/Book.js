/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from './redux/books/books';
import '../App.css';

const Book = (props) => {
  const { books } = props;
  const dispatch = useDispatch();
  return (
    <div className="books">
      {books.map((book) => (
        <div className="book-content" key={book.id}>
          <div className="book-card">
            <div className="book-detail">
              <strong>{book.category}</strong>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <span className="btn-status">
              <button type="button">Comments</button>
              <button
                className="remove-btn"
                type="button"
                onClick={() => dispatch(removeBook(book.id))}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </span>
          </div>
          <div className="book-progress">
            <div className="progress">
              <div className="progress-bar" />
            </div>
            <div className="progress-info">
              <p className="completed">
                {book.complete}
                %
              </p>
              <span>Completed</span>
            </div>
            <div className="progress-status">
              <p>Current Chapter</p>
              <span>
                Chapter
                {' '}
                {book.chapter}
              </span>
              <button type="button">Update Progress</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      chapter: PropTypes.number.isRequired,
    },
  )).isRequired,
};

export default Book;
