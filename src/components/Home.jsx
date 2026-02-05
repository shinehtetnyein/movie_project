import React, { useEffect } from "react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";
const Home = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await api.get(`movie/popular?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results));
    // console.log(res.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
