import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/movies/details/${movie.id}`}>
        <img
          className="rounded-t-lg w-full h-64 object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold text-gray-800 truncate">
            {movie.original_title}
          </h5>
          <p className="text-sm text-gray-600 mt-2">
            {movie.overview.slice(0, 100)}...
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              <i className="fa-solid fa-star mr-1"></i>
              {movie.vote_average}
            </span>
            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
              <i className="fa-solid fa-calendar-days mr-1"></i>
              {movie.release_date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
