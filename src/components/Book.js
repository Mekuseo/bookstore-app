/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
function Book(props) {
  const handleRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <div className="input">
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <button type="submit" onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default Book;
