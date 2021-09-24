import { search } from "../acctionTypes";

const initialState = {
  searchResults: undefined
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case search.SET_SEARCH_RESULTS:
      const { searchResults } = action;
      state.searchResults = searchResults
      return {searchResults};
    default:
      return state;
  }
};

export default searchReducer