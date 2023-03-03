// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// initial State
const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
const checkStatusAction = () => ({
  type: CHECK_STATUS,
});

// Export
export { checkStatusAction };
export default categoriesReducer;
