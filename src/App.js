import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Links from './components/Links';

const App = () => (
  <div>
    <Router>
      <Links />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </Router>
  </div>
);

export default App;
