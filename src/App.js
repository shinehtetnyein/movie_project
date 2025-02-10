import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router";
import FileNofFound from "./components/FileNofFound";
import Details from "./components/Details";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/home" element=<Home /> />
        <Route path="/movies/details/:movieId" element=<Details /> />
        <Route path="*" element=<FileNofFound /> />
      </Routes>
    </div>
  );
};

export default App;
