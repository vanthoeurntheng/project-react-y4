// MovieCard.jsx
import React from "react";
// import App from './App';
const MovieItems = ({ movie }) => {
  return (
    <div className="movie shadow relative">
      {/* <div className="overlay absolute top-2 left-2 text-gray-100 font-semibold">
        <p>{movie.Title}</p>
      </div> */}

      <div className="overlay absolute top-[40%] left-[30%]">
        <span className="text-4xl font-bold text-yellow-200">SOON</span>
      </div>

      <div>
        <img className="w-full h-96 rounded-lg" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
      </div>

      <div className="box text-white">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
      
    </div>
  );
};
export default MovieItems;
