import { NavLink, Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Header = ({ movies }) => {
  return (
    <header className="flex justify-between p-5">
      <h1 className="text-yellow-600">Movie Database</h1>
      <Searchbar movies={movies} />
      <NavLink className={"grid grid-cols-3 gap-6"}>
        <Link to={"/admin/moviePanel"}>Admin Page</Link>
        <Link to={"/user/favorites"}>Favorites Page</Link>
        <Link to={"/"}>Home</Link>
      </NavLink>
    </header>
  );
};

export default Header;
