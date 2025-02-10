import { actionType } from "../action_type";

export const fetchMovies = (movies) => {
  // console.log(movies);
  return {
    type: actionType.FETCH_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: actionType.SELECT_MOVIES,
    payload: movie,
  };
};

export const removeSelectedMovie = (movie) => {
  return {
    type: actionType.REMOVE_SELECTED_MOVIES,
    payload: movie,
  };
};
