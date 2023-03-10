import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusAction } from './redux/categories/categories';
import '../App.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="category-list">
      <h1>Categories</h1>
      <button type="button" onClick={() => dispatch(checkStatusAction())}>
        Check Status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
