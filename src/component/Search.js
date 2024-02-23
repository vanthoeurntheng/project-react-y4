// Filename - Search.js 
import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function Search({ searchInput, search }) {
	return (
      <div className=" w-full relative p-2">
        <input type="text" placeholder="Search Movie..."
          className="p-3 w-[401px] sm:w-[500px] md:w-[760px] focus:outline-none tracking-wider rounded-xl bg-gray-900 text-gray-300 w-full shadow-sm shadow-yellow-200/50"
          onChange={searchInput} onKeyPress={search} />

      <div className="isSearch absolute top-4 right-4"><RiSearch2Line className="text-amber-200 text-3xl"/></div>
      </div>

  );
}

export default Search;
