import MovieList from "../components/MovieList";

const Home = ({ movies, setRefresherFav }) => {
  return (
    <>
      <MovieList
        canDel={false}
        canFav={true}
        movies={movies}
        setRefresherFav={setRefresherFav}
      />
    </>
  );
};

export default Home;
