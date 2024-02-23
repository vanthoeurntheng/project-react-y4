
import React, { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import "../App.css";
import Search from "../component/Search";

import { TiMediaPlay } from "react-icons/ti";

function Moveflix() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=f6ab13a9";
  // const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

  const searchInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        console.log("true");

        setState((prevState) => {
          return {
            ...prevState,
            results: results,
          };
        });
      });
    }
  };

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App h-auto mt-24">
      <main className="flex flex-col justify-center items-center mt-5 md:mt-10 p-3">
        <div className="text-gray-800 mt-3 md:mt-0">
          <Search searchInput={searchInput} search={search} />
        </div>
        <div className="max-w-7xl mt-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {state.results.map((e) => (
              <div className="movie-items relative ">
                <img
                  className="w-full h-96 bg-no-repeat bg-center bg-cover rounded opacity-70"
                  src={e.Poster}
                />
                <div
                  onClick={() => openDetail(e.imdbID)}
                  className=" cursor-pointer text-4xl bg-gray-300 rounded-full p-1.5 border-[5px] border-gray-600 absolute top-[35%] left-[38%] hover:border-yellow-500 hover:bg-white duration-500"
                >
                  <TiMediaPlay className="text-yellow-500" />
                </div>

                <div className="box text-gray-100 font-light tracking-wider mt-3 block">
                  {e.Title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default Moveflix;
