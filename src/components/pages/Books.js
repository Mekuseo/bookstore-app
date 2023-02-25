import Book from '../Book';
import Form from '../Form';

function Books() {
  return (
    <div>
      <h2>Books</h2>
      <Book title="Title 1" author="Author 1" />
      <Book title="Title 2" author="Author 2" />
      <Form />
    </div>
  );
}

export default Books;
