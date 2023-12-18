import { useRef } from "react";

const AddForm = ({ setRefresher }) => {
  const titleRef = useRef();
  const yearRef = useRef();
  const ratingRef = useRef();
  const urlRefRef = useRef();
  const moviePlotRef = useRef();

  const saveObj = async () => {
    const obj = {
      movieTitle: titleRef.current.value,
      movieReleaseYear: yearRef.current.value,
      movieRating: ratingRef.current.value,
      movieImage: urlRefRef.current.value,
      moviePlot: moviePlotRef.current.value,
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND + "/api/movies",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(obj),
        }
      );
      response.ok ? setRefresher((prev) => !prev) : null;
    } catch (error) {
      console.log("Erro beim adden", error);
    }
  };

  return (
    <section className="grid grid-cols-1">
      <input
        ref={titleRef}
        type="text"
        placeholder="Title..."
        className="w-full max-w-xs input input-bordered"
      />

      <input
        ref={urlRefRef}
        type="text"
        placeholder="Url..."
        className="w-full max-w-xs input input-bordered"
      />

      <input
        className="w-full max-w-xs input input-bordered"
        type="number"
        ref={yearRef}
        min="1900"
        max="2099"
        step="1"
        placeholder="Year..."
      />

      <input
        ref={ratingRef}
        type="number"
        placeholder="Rating..."
        className="w-full max-w-xs input input-bordered"
        min={0}
      />

      <textarea
        ref={moviePlotRef}
        type="text"
        placeholder="Description..."
        className="w-full max-w-xs input input-bordered"
      />

      <button onClick={saveObj} className="btn">
        Save Movie
      </button>
    </section>
  );
};

export default AddForm;
