/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function Book(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <button type="submit">Remove</button>
    </div>
  );
}

export default Book;
