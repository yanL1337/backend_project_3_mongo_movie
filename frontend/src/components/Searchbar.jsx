import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ movies }) => {
  const navigate = useNavigate();
  movies.forEach((movie) => {
    movie.id = movie._id;
  });

  //   const movies = [
  //     {
  //       movieImage:
  //         "https://m.media-amazon.com/images/M/MV5BMjQ5ODI1MjQtMDc0Zi00OGQ1LWE2NTYtMTg1YTkxM2E5NzFkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  //       moviePlot:
  //         "A bitter middle-aged couple, her derisive of his lowly position at a New England college, ask a new colleague and his wife over for drinks, and use them to fuel anguish and emotional pain toward each other through a distressing night.",
  //       movieRating: 8,
  //       movieReleaseYear: 1966,
  //       movieRuntime: 7860,
  //       movieTitle: "Wie is bang voor Virginia Woolf?",
  //       id: "657c3ccdb48361f63ce46a1a",
  //     },

  //     {
  //       movieImage:
  //         "https://m.media-amazon.com/images/M/MV5BMjQ5ODI1MjQtMDc0Zi00OGQ1LWE2NTYtMTg1YTkxM2E5NzFkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  //       moviePlot:
  //         "A bitter middle-aged couple, her derisive of his lowly position at a New England college, ask a new colleague and his wife over for drinks, and use them to fuel anguish and emotional pain toward each other through a distressing night.",
  //       movieRating: 8,
  //       movieReleaseYear: 1966,
  //       movieRuntime: 7860,
  //       movieTitle: "Wie is bang voor Virginia Woolf?",
  //       id: "657c3ccdb48361f63ce46a1b",
  //     },

  //     {
  //       movieImage:
  //         "https://m.media-amazon.com/images/M/MV5BMjQ5ODI1MjQtMDc0Zi00OGQ1LWE2NTYtMTg1YTkxM2E5NzFkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
  //       moviePlot:
  //         "A bitter middle-aged couple, her derisive of his lowly position at a New England college, ask a new colleague and his wife over for drinks, and use them to fuel anguish and emotional pain toward each other through a distressing night.",
  //       movieRating: 8,
  //       movieReleaseYear: 1966,
  //       movieRuntime: 7860,
  //       movieTitle: "Wie is bang voor Virginia Woolf?",
  //       id: "657c3ccdb48361f63ce46a1c",
  //     },
  //   ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    navigate(`./movie/${item.id}`);
    navigate(0);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.movieTitle}
        </span>
      </>
    );
  };
  return (
    <div className="w-80">
      <ReactSearchAutocomplete
        items={movies}
        fuseOptions={{ keys: ["movieTitle"] }}
        resultStringKeyName="movieTitle"
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        styling={{
          backgroundColor: "#375470",
          color: "white",
          iconColor: "white",
          border: "none",
          hoverBackgroundColor: "#152f47",
        }}
      />
    </div>
  );
};

export default Searchbar;
