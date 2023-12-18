import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMoviePage from "./pages/AddMoviePage";
import { useEffect, useState } from "react";
import MovieDetailPage from "./pages/MovieDetailPage";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

const Handler = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [refresher, setRefresher] = useState(false);
  const [refresherFav, setRefresherFav] = useState(false);

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
  }, [refresher]);

  useEffect(() => {
    const getFavs = async () => {
      try {
        setFavorites(
          await fetch(import.meta.env.VITE_BACKEND + "/api/favorites", {
            method: "GET",
          }).then((res) => res.json())
        );
      } catch (error) {
        console.log("Fehler beim fetchen von favorites", error);
      }
    };
    getFavs();
  }, [refresherFav]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setRefresherFav={setRefresherFav} />}
        />
        <Route
          path="/admin/moviePanel"
          element={
            <AddMoviePage
              movies={movies}
              setRefresherFav={setRefresherFav}
              setRefresher={setRefresher}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDetailPage movies={movies} />}
        />
        <Route
          path="/user/favorites"
          element={
            <Favorites
              setRefresherFav={setRefresherFav}
              favorites={favorites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Handler;
