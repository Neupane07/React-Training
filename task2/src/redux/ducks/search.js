export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const getSearchResults = (term) => ({
  type: GET_SEARCH_RESULTS,
  term
});

export const setSearchResults = (searchResults) => ({
  type: SET_SEARCH_RESULTS,
  searchResults
});

const initialState = {
  searchResults: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      const { searchResults } = action;
      state.searchResults = searchResults
      console.log("state inside reducer",state.searchResults)
      return {searchResults};
    default:
      return state;
  }
};