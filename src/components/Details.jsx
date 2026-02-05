import { Card } from "flowbite-react";
import React, { useEffect } from "react";
import { api, api_key } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieDetails = async () => {
    const res = await api.get(`movie/${movieId}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if (movieId) {
      movieDetails();
    }
    return () => dispatch(removeSelectedMovie({}));
  }, [movieId, dispatch]);

  const movie = useSelector((state) => state.movies.movie);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-arrow-left mr-2"></i> Back
      </button>

      {movie && (
        <div className="flex flex-col md:flex-row mt-8 gap-8 items-center md:items-start">
          <img
            className=" md:w-1/3 lg:w-1/4 rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {movie.original_title}
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed">{movie.overview}</p>
            <div className="flex items-center gap-4">
              <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded">
                <i className="fa-solid fa-star mr-1"></i>
                {movie.vote_average}
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                {movie.release_date}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
