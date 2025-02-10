import React from "react";
import { Link } from "react-router";
import { Card } from "flowbite-react";

const MoviesCard = ({ movie }) => {
//   console.log(movie);
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.original_title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0, 120) + " ....."}
            </p>
            <p className="text-white">
              <span className="p-1 mt-2 me-2 bg-orange-500 rounded-xl">
                <i className="fa-solid fa-star me-1"></i>
                {movie.vote_average}
              </span>
              <span className="p-1 ms-3 bg-gray-500 rounded-xl px-2">
                <i class="fa-solid fa-calendar-days me-1"></i>
                {movie.release_date}
              </span>
            </p>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MoviesCard;
