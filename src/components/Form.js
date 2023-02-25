/* eslint-disable jsx-a11y/label-has-associated-control */
function Form() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
