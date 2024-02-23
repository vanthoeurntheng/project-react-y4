// App.js

import React, { useState } from "react";
import { useEffect } from "react";
import "./Cate.css"
import MovieItems from "./MovieItems";
import Flix from "./Flix";

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";
const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("power");
  }, []);

  return (
    <div className="app mt-20">
      <Flix />
      <div className="flex flex-col justify-center items-center">
        <span className="trailer py-5">Comming Soon</span>

        {/* <div className="search">
          <input
            placeholder="Search for Trailers"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
            alt="search icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div> */}

        {movies?.length > 0 ? (
          <div className="overflow-hidden max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-3 transition duration-700 ease-in-out">
            {movies.map((movie) => (
              <MovieItems movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Movie;
