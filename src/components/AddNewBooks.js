/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './redux/books/books';
import '../App.css';

const categories = ['Action', 'Science Fiction', 'Economy', 'History'];

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const handleBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleBookCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const submitBookToStore = (title, author, category) => {
    if (!title || !author) return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
      complete: false,
      chapter: 0,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('Action');
  };
  return (
    <div className="add-new-book">
      <hr />
      <h1>Add New Book</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleBookTitle}
          value={bookTitle}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={handleBookAuthor}
          value={bookAuthor}
          required
        />
        <select name="category" id="category" value={bookCategory} onChange={handleBookCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={() => submitBookToStore(bookTitle, bookAuthor, bookCategory)}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
