import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../fetchRequest";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdPlay, IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const BillBoardAnimation = ({ className, ...props }) => {
  const [movie, setMovie] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  const rating = [movie.vote_average].toString().split(".");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.netflixOriginalsFetch);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div className={className} {...props}>
      <div className="relative max-h-4xl">
        <img
          className="w-full max-h-4xl z-0"
          src={`https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${movie.backdrop_path}`}
          alt=""
        />
        <div className="absolute left-20 top-1/4 w-2/5">
          <h2
            style={{ fontSize: "5vw" }}
            className="text-white text-7xl mb-4 xlm:text-300"
          >
            {movie.name}
          </h2>
          <p className="text-2xl text-white mb-6 xlm:text-300 xlm:leading-tight ">
            {movie.overview}
          </p>
          <div className="flex">
            <button className="bg-white rounded-smm whitespace-nowrap mr-5 px-8 py-3 xlm:px-5 xlm:py1 flex items-center">
              <IoMdPlay className="text-3xl mr-3 xlm:text-xl" /> <p>Oynat</p>
            </button>
            <button
              onClick={handleClick}
              className="bg-nx-gray-200 rounded-smm whitespace-nowrap px-8 py-3 xlm:px-5 xlm:py1 flex items-center"
            >
              <BsExclamationCircle className="transform rotate-180 text-white text-3xl xlm:text-xl mr-3" />
              <p>Daha Fazla Bilgi</p>
            </button>
          </div>
        </div>
        {showDetail ? (
          <div
            id="detail-card"
            onClick={(e) =>
              e.target.id === "detail-card" ? setShowDetail(!showDetail) : ""
            }
            className="fixed top-0 bottom-0 min-h-screen min-w-full bg-opac-100 z-40"
          >
            <div
              className="fixed top-28 right-1/4 z-50 text-2xl text-white 2xlm:right-1/5 2xlm:left-1/5 lgmax:right-1/20 lgmax:left-1/20
             max-w-4xl  bg-nx-gray-800 h-auto max-h-3xl  rounded-lg overflow-hidden"
            >
              <div
                className="absolute right-4 top-4 cursor-pointer bg-gray-700 rounded-full p-1 z-30"
                onClick={handleClick}
              >
                <IoMdClose className="text-white text-3xl" />
              </div>
              <div className="relative">
                <img
                  className="h-4/6 w-full bg-cover bg-no-repeat"
                  src={`https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${movie.poster_path}`}
                  alt=""
                />
                <div className="w-full absolute left-10 bottom-1/5">
                  <h2 className="text-4xl xlm:text-3xl lgmax:text-2xl w-3/5 xlm:w-4/5 font-extrabold">
                    {movie.name}
                  </h2>
                  <div className="flex xlm:text-xl">
                    <button className="bg-white text-black pl-9 pr-11 py-1 mr-2 xlm:pr-5 xlm:pl-4 flex items-center rounded-md">
                      <IoMdPlay className="mr-2 " />
                      Oynat
                    </button>
                    <div className="border-2 rounded-full border-nx-gray-200 p-2 mr-2 cursor-pointer ">
                      <HiPlus className="text-white" />
                    </div>
                    <div className="border-2 rounded-full border-nx-gray-200 p-2 mr-2 cursor-pointer">
                      <AiOutlineLike className="text-white" />
                    </div>
                    <div className="border-2 rounded-full border-nx-gray-200 p-2 mr-2 cursor-pointer">
                      <AiOutlineDislike />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-9">
                <div className="text-lg text-nx-green">
                  <strong>
                    %{`${rating[0]}${rating[1] ? rating[1] : 0} `}
                  </strong>{" "}
                  Eşleşme{" "}
                  <span className="text-white">
                    {movie.first_air_date.slice(0, 4)}
                  </span>
                </div>
                <p className="text-lg w-5/6 xlm:w-full">
                  {
                    (movie.overview =
                      movie.overview.length < 500
                        ? movie.overview
                        : `${movie.overview.slice(0, 500)} ...`)
                  }
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BillBoardAnimation;
