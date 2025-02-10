import React from "react";

import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";
const Movies = () => {
  let movies = [];
  movies = useSelector((state) => state.movies.movies);
  // console.log(movies);
  return (
    <div className="container ms-auto me-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
        {movies.length > 0 ? (
          movies.map((mov, index) => <MoviesCard key={index} movie={mov} />)
        ) : (
          <h1>Thers is no movies</h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
