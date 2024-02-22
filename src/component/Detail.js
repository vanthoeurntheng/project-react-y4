// Filename - components/Detail.js

import React from "react";

function Detail({ selected, closeDetail }) {
	return (
    <>
		<section className="fixed top-0 left-0 flex justify-center items-center bg-gray-900 w-full min-h-screen z-40">
			<div className="flex justify-center items-center w-full">
				<div className="max-w-7xl grid grid-cols-2 gap-5 text-gray-200 p-5">
				<div className="flex justify-center items-center">
					<img src={selected.Poster}></img>
				</div>

				<div className="flex flex-col justify-start gap-5 tracking-wider">
					<span className="text-left text-3xl md:text-5xl font-bold mt-10 md:mt-0">{selected.Title}</span>
					<span className="text-left text-2xl font-bold">{selected.Year}</span>
					<span className="text-left text-2xl font-bold">
					Rating: {selected.imdbRating}
					</span>
					<p className="text-left tracking-wide">{selected.Plot}</p>
					<div className="flex">
						<button className="close px-10 py-2 border border-yellow-600 rounded-lg hover:bg-gray-800 duration-500" onClick={closeDetail}> CLOSE </button>
					</div>
				</div>
				</div>
			</div>
		</section>
    </>
  );
}

export default Detail;
