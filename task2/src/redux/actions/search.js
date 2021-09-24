import { search } from "../acctionTypes";

export const getSearchResults = (term) => ({
  type: search.GET_SEARCH_RESULTS,
  term
});

export const setSearchResults = (searchResults) => ({
  type: search.SET_SEARCH_RESULTS,
  searchResults
});