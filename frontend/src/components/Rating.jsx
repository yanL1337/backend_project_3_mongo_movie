const Rating = ({ movie }) => {
  let count = Math.round(Number(movie.movieRating));
  let stars = "";

  for (let i = 0; i < count; i++) {
    stars += "★";
  }

  for (let i = 0; i < 10 - count; i++) {
    stars += "☆";
  }

  return (
    <div>
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
