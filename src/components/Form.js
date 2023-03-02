/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
