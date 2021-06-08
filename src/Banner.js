import React, { useState, useEffect } from "react";
import axios from "./axios";

import requests from "./requests";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results[Math.floor(Math.random() * 20)]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100%",
      }}
    >
      <div className="banner-content">
        <h2>{movies?.title || movies?.name || movies?.original_name}</h2>
        <p>{truncate(movies?.overview, 250)}</p>
        <div className="banner-btn">
          <button className="play-btn">Play</button>
          <button className="list-btn">My list</button>
        </div>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
};

export default Banner;
