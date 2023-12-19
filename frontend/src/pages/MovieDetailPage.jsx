import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";

const MovieDetailPage = ({ setRefresherFav }) => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setMovies(
          await fetch(import.meta.env.VITE_BACKEND + "/api/movies", {
            method: "GET",
          }).then((res) => res.json())
        );
      } catch (error) {
        console.log("Fehler beim fetchen von movies", error);
      }
    };
    getMovies();
  }, []);

  const movie = movies.filter((movie) => movie._id === id);

  return <Movie movie={movie[0]} setRefresherFav={setRefresherFav} />;
};

export default MovieDetailPage;
