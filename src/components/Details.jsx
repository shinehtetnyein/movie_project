import { Card } from "flowbite-react";
import React, { useEffect } from "react";
import { api, api_key } from "../api";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";
const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  // console.log(movieId);
  const movieDetails = async () => {
    const res = await api.get(`movie/${movieId}?api_key=${api_key}`);
    // console.log(res.data);
    dispatch(selectedMovie(res.data));
  };
  useEffect(() => {
    if (movieId) {
      movieDetails();
    }
    return () => dispatch(removeSelectedMovie({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let movie = useSelector((state) => state.movies.movie);
  const navigate = useNavigate();
  return (
    <div className="container m-2">
      {/* <Link to={"/"}>
        <h1 type="button">Back</h1>
      </Link> */}
      <div>
        <button
          className="ms-6"
          style={{
            color: "#fff",
            backgroundColor: "darkblue",
            padding: "5px 15px",
            borderRadius: "10px",
          }}
          onClick={() => navigate("/")}
        >
          <i class="fa-solid fa-backward"></i>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2px",
          margin: "20px",
        }}
      >
        <div>
          <Card
            className=""
            imgAlt="Meaningful alt text for an image that is not purely
              decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          ></Card>
        </div>
        <div className="ms-4">
          <h5 className="text-4xl my-4 font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
          <p className="font-normal mt-3 mb-3 text-gray-700 dark:text-gray-400">
            {movie.overview}
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
        </div>
      </div>
    </div>
  );
};

export default Details;
