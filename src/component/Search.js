// Filename - Search.js 

import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function Search({ searchInput, search }) {
	return (
    <div className="search-bar md:w-72 relative">
      <input type="text" placeholder="Search Movie..."
        className="p-2 focus:outline-none tracking-wider rounded bg-gray-900 text-gray-300 w-full shadow-sm shadow-yellow-200/50"
        onChange={searchInput} onKeyPress={search} />

		<div className="isSearch absolute top-1.5 right-2"><RiSearch2Line className="text-amber-200 text-2xl"/></div>
    </div>
  );
}

export default Search;