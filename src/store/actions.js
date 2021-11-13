import {store} from '.';
import {STORE_MOVIE} from './types';

export function storeMovie(addedMovie) {
  const state = store.getState();
  if (state.movies) {
    if (state.movies.some(item => item.Title === addedMovie.Title))
      return {
        payload: state.movies,
        type: STORE_MOVIE,
      };
    return {
      payload: [...state.movies, addedMovie],
      type: STORE_MOVIE,
    };
  }

  return {
    payload: [addedMovie],
    type: STORE_MOVIE,
  };


}
