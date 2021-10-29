import React, { useState, useEffect } from "react";
import axios from "../../axios";

const base_url = "https://www.themoviedb.org/t/p/w220_and_h330_face//"
 

const Row = ({ children, title, className, fetchUrl, ...props }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
}, [fetchUrl]);

console.log(movies)
  return (
    <div className={className} {...props}>
      {/* {children ? children :" hello row"} */}
      <h2>{title} </h2>
      <div className="row-container">
        <div className="bg-nx-gray-200  w-full mb-3"> 
        <div className="slider flex whitespace-nowrap overflow-hidden ">
            {movies.map((movie) => (
              <div className="mr-2 w-1/6 h-44 transform hover:scale-105 hover:z-10 overflow-hidden"> 
                {console.log(movie)}
                <img className="bg-no-repeat bg-cover w-full" src={`${base_url}${movie.poster_path}`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
