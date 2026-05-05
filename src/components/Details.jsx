import React, { useEffect, useCallback } from "react";
import { api, api_key } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = useSelector((state) => state.movies.movie);

  // Memoized fetch function to prevent infinite re-renders
  const fetchMovieDetails = useCallback(async () => {
    try {
      const res = await api.get(`movie/${movieId}?api_key=${api_key}`);
      dispatch(selectedMovie(res.data));
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  if (!movie) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white p-6">
      {/* UI Frame Container */}
      <div className="max-w-6xl mx-auto">

        {/* Navigation Bar */}
        <button
          className="flex items-center gap-2 mb-6 text-gray-400 hover:text-white transition-colors"
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span className="font-medium">Back to Movies</span>
        </button>

        {/* Main Content Frame */}
        <div className="relative overflow-hidden bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
          <div className="relative z-10 flex flex-col md:flex-row p-8 gap-10 bg-gradient-to-t from-gray-900/90 to-transparent">

            {/* Poster Section */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                className="w-64 md:w-80 rounded-xl shadow-2xl border-2 border-gray-600 transform transition hover:scale-105"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                {movie.original_title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full border border-yellow-500/30">
                  <i className="fa-solid fa-star mr-2"></i>
                  <span className="font-bold">{movie.vote_average?.toFixed(1)}</span>
                </div>
                <div className="flex items-center bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                  <i className="fa-solid fa-calendar-days mr-2"></i>
                  <span className="font-medium">{movie.release_date}</span>
                </div>
                {movie.runtime && (
                  <span className="text-gray-400 italic">{movie.runtime} min</span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-300">Overview</h3>
              <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
                {movie.overview}
              </p>

              {/* Action Buttons Frame */}
              <div className="mt-8 flex gap-4">
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
                  Watch Trailer
                </button>
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
                  Add to List
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
