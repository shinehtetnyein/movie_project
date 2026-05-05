import React, { useEffect, useCallback } from "react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies, setLoading, setError } from "../redux/action/movies";

const Home = () => {
  const dispatch = useDispatch();
  
  const getMovies = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const res = await api.get(`movie/popular?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.message));
      console.error("Error fetching movies:", error);
    }
  }, [dispatch]);

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
