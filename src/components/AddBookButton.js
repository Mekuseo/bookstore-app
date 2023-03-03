/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addBook } from './redux/books/booksSlice';

function AddBookButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    const id = Math.floor(Math.random() * 100000);
    dispatch(addBook({
      id,
      title: 'New Book',
      author: 'Unknown',
    }));
  };

  return (
    <Button onClick={handleClick}>Add Book</Button>
  );
}

export default AddBookButton;
