import React, { useEffect, useState } from "react";
import "../css/row.css";
import { getBanners } from "./utils/service";

function Rows({ title, fetchUrl, isLarge }) {
  const ImageUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data } = await getBanners(fetchUrl);
      setMovies(data.results);
      return data;
    }
    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLarge && "row__poster__large"}`}
                src={`${ImageUrl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt="movie"
              />
            )
        )}
      </div>
    </div>
  );
}

export default Rows;
