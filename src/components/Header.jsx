import { Navbar, TextInput } from "flowbite-react";
import React, { useRef } from "react";
import { Link } from "react-router";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";
const Header = () => {
  const movieName = useRef("");

  const dispatch = useDispatch();

  // const [movieName, setMovieName] = useState("");
  const movieSubmit = async () => {
    // console.log(movieName.current.value);
    if (movieName.current.value !== "") {
      const res = await api.get(
        `search/movie?query=${movieName.current.value}&api_key=${api_key}`
      );
      console.log(res.data.results);
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <div>
      <Navbar
        fluid
        rounded
        style={{
          backgroundColor: "darkred",
          color: "#fff",
          padding: "15px 20px",
          marginBottom: "20px",
        }}
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to={"/"}>SS Movies Channel</Link>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <form className="flex">
            <p className="me-2">
              <TextInput
                placeholder="Search ..."
                // onChange={(e) => setMovieName(e.target.value)}
                ref={movieName}
              />
            </p>
            <button
              type="button"
              className="d-inline text-white hover:text-white border border-white-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              onClick={() => movieSubmit()}
            >
              Search
            </button>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
