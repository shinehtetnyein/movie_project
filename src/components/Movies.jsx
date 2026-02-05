import React, { useState } from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const Movies = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie, index) => <MoviesCard key={index} movie={movie} />)
        ) : (
          <h1>No movies found</h1>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredMovies.length / moviesPerPage) }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Movies;
