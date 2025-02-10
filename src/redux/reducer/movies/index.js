import { actionType } from "../../action/action_type";

const initialState = {
  movies: [],
  movie: {},
};
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_MOVIES:
      return { ...initialState, movies: payload };
    case actionType.SELECT_MOVIES:
      return { ...initialState, movie: payload };
    default:
      return state;
  }
};
