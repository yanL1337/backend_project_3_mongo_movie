import MovieList from "../components/MovieList";

const Favorites = ({ setRefresherFav, favorites }) => {
  return (
    <>
      <MovieList
        movies={favorites}
        setRefresherFav={setRefresherFav}
        canFav={false}
      />
    </>
  );
};

export default Favorites;
