/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function Book(props) {
  return (
    <div className="input">
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <button type="submit" onClick={props.onRemove}>Remove</button>
    </div>
  );
}

export default Book;
