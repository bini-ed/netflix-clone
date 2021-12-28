import React, { useEffect, useState } from "react";
import "../css/banner.css";
import { request } from "./utils/request";
import { getBanners } from "./utils/service";
import { truncate } from "./utils/truncate";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getBanner() {
      const { data } = await getBanners(request[1].url);
      if (data)
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      console.log(data);
      return data;
    }
    getBanner();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.original_title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="button__button">Play</button>
          <button className="button__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 100)}
        </div>
      </div>

      <div className="banner__fadeButton" />
    </header>
  );
}

export default Banner;
