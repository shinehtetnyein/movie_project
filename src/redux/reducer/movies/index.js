import { actionType } from "../../action/action_type";

const initialState = {
  movies: [],
  movie: {},
  loading: false,
  error: null,
};
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_MOVIES:
      return { ...state, movies: payload, loading: false, error: null };
    case actionType.SELECT_MOVIES:
      return { ...state, movie: payload };
    case actionType.SET_LOADING:
      return { ...state, loading: payload };
    case actionType.SET_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
