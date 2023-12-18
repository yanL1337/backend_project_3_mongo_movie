import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const MovieDetailPage = ({ movies }) => {
  const { id } = useParams();

  const movie = movies.filter((movie) => movie._id === id)[0];

  return <Movie movie={movie} />;
};

export default MovieDetailPage;
