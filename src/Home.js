// import React from "react";
// import React, { useEffect } from "react";

import React, {useEffect, useState } from "react";
import axios from "axios";
import Search from "./component/Search";
import Detail from "./component/Detail";
import "./App.css";

import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { TiMediaPlay } from "react-icons/ti";

function Home() {
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
        console.log('true');

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
    <div className="App h-auto">
      <div className="head w-full flex flex-col justify-center items-center fixed top-0 shadow shadow-indigo-400/20 bg-[#051923] text-gray-100 z-50 overflow-hidden px-5 z-50">
        <div className="head-item w-full md:max-w-7xl flex items-center justify-between  gap-2 py-2">
          {/* log */}
          <div className="md:w-3/12">
            <Link to={"/"}>
              <span className="text-3xl font-bold text-yellow-200 tracking-wide">
                Hot<span className="text-gray-100">Flix</span>
              </span>
            </Link>
          </div>
          {/* menu */}
          <div id="mySidepanel" className="menu md:w-9/12">
            <div className="flex flex-col justify-start md:justify-end md:items-center md:flex-row text-md md:text-sm leading-5 p-4 gap-3 tracking-wider">
              <div className="flex flex-col justify-start tracking-widest md:flex-row gap-5 mt-8 md:mt-0 md:gap-8 md:px-5">
                <Link className="text-left link link-underline py-1.5" to={"/"}>
                  HotFlix
                </Link>
                <Link
                  className="text-left link link-underline py-1.5"
                  to={"/Movie"}
                >
                  Movie
                </Link>
                <Link
                  className="text-left link link-underline py-1.5"
                  to={"/Pricingplan"}
                >
                  PricingPlan
                </Link>
              </div>

              <div className="hidden md:block text-gray-800 mt-3 md:mt-0">
                <Search searchInput={searchInput} search={search} />
              </div>

              <div className="flex mt-5 md:mt-0">
                <Link
                  className="px-4 py-2 shadow-sm shadow-yellow-200/50 bg-gray-900 text-yellow-200 rounded-md hover:bg-gray-700 duration-50 tracking-widest"
                  to={"/Login"} >Login|Signup</Link>
              </div>
            </div>
          </div>
          <div className="md:hidden text-gray-800 md:mt-0">
            <Search searchInput={searchInput} search={search} />
          </div>
          {/* Hambuger */}
          <div class="openbtn hidden cursor-pointer text-gray-100 border  shadow rounded-full z-40 hover:bg-none">
            <Hamburger
              direction="right"
              size={20}
              border={15}
              onToggle={(toggle) => {
                if (toggle) {
                  document.getElementById("mySidepanel").style.width = "320px";
                } else {
                  document.getElementById("mySidepanel").style.width = "0%";
                }
              }}
            />
          </div>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center mt-5 md:mt-10 p-3">
        <div className="max-w-7xl">
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

export default Home;
