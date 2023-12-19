import MovieList from "../components/MovieList";
import AddForm from "../components/addForm";

const AddMoviePage = ({ setRefresher, setRefresherFav, movies }) => {
  return (
    <>
      <AddForm setRefresher={setRefresher} />
      <MovieList
        movies={movies}
        setRefresher={setRefresher}
        setRefresherFav={setRefresherFav}
        canFav={true}
        canDel={true}
      />
    </>
  );
};

export default AddMoviePage;
