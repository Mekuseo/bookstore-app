/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const handleCheckStatus = () => {
    dispatch(setStatus('Categories Loading...'));
  };

  return (
    <div>
      <h2>Categories</h2>
      <p>
        Status:
        {status}
      </p>
      <button type="button" onClick={handleCheckStatus}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
