import Movie from "./Movie";

const MovieList = ({
  movies,
  canDel,
  canFav,
  setRefresher,
  setRefresherFav,
}) => {
  return (
    <section className="grid grid-cols-3 gap-10">
      {movies.map((movie, index) => {
        return (
          <Movie
            canFav={canFav}
            canDel={canDel}
            setRefresherFav={setRefresherFav}
            setRefresher={setRefresher}
            key={index}
            movie={movie}
          />
        );
      })}
    </section>
  );
};

export default MovieList;
