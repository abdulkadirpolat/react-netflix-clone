import React, { useState, useEffect } from "react";
import axios from "../../axios";

const base_url = "https://www.themoviedb.org/t/p/w220_and_h330_face//";

const Row = ({ children, title, className, fetchUrl, ...props }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`${className} `} {...props}>
      <div className="px-15 ">
        <h2 className="text-white text-2xl font-semibold mb-7 group flex">
          {title}{" "}
          <div
            className="group-hover:opacity-100 opacity-0 ml-5
           transform transition-opacity duration-500 ease-in-out"
          >
            Explore All
          </div>{" "}
        </h2>
        <div className="row-container">
          <div className="   w-full mb-3">
            <div className="slider flex whitespace-nowrap  ">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="mr-2 min-w-m220 xlm:min-w-m100 mdm:min-w-m74 transform hover:scale-105 hover:z-10 "
                >
                  <img
                    className="bg-no-repeat bg-cover w-full"
                    src={`${base_url}${movie.poster_path}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
