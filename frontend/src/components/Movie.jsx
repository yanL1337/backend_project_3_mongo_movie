import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Movie = ({ movie, canDel, canFav, setRefresher, setRefresherFav }) => {
  const [fav, setFav] = useState(false);

  const addFav = async () => {
    const res = await fetch(import.meta.env.VITE_BACKEND + "/api/favorites", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    });
    setFav((prev) => !prev);
    res.ok ? setRefresherFav((prev) => !prev) : null;
  };

  const delFav = async () => {
    const res = await fetch(import.meta.env.VITE_BACKEND + "/api/favorites", {
      method: "DELETE",
      body: JSON.stringify({ id: movie._id }),
      headers: {
        "content-type": "application/json",
      },
    });
    setFav((prev) => !prev);
    res.ok ? setRefresherFav((prev) => !prev) : null;
  };

  const delMovie = async () => {
    const response = await fetch(import.meta.env.VITE_BACKEND + "/api/movies", {
      method: "DELETE",
      body: JSON.stringify({ id: movie._id }),
      headers: {
        "content-type": "application/json",
      },
    });
    response.ok ? setRefresher((prev) => !prev) : null;
  };
  return (
    <div className="bg-slate-700 rounded-lg p-5 ">
      <p>Title: {movie.movieTitle}</p>
      <p>Release: {movie.movieReleaseYear}</p>
      <p>Rating: {<Rating movie={movie} />}</p>
      <p>{movie.moviePlot}</p>
      <img className="mb-5" src={movie.movieImage} alt="" />
      <Link className="mb-5" to={`/movie/${movie._id}`}>
        Read more
      </Link>
      <div className="flex justify-between">
        {canFav ? (
          <button onClick={fav ? delFav : addFav}>
            {fav ? "Delete Favorite" : "Add Favorite"}
          </button>
        ) : (
          <button onClick={delFav}>Delete Favorite</button>
        )}

        {canDel && <button onClick={delMovie}>Delete Movie</button>}
      </div>
    </div>
  );
};

export default Movie;
