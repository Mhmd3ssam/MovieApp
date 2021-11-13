import {STORE_MOVIE} from './types';
const initialState = {
  movies: [],
};

export function storeMovie(state = initialState, action) {
  switch (action.type) {
    case STORE_MOVIE:
      return {...state, movies: action.payload};
    default:
      return state;
  }
}
