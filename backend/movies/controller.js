import { ObjectId } from "mongodb";
import { dbo } from "../utils/db.js";

export const addMovie = async (req, res) => {
  console.log(req.body);
  try {
    const Movie = await dbo.collection("movies").insertOne(req.body);
    Movie.acknowledged ? res.json(Movie).end() : res.status(500).end();
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

export const getMovies = async (req, res) => {
  try {
    const Movies = await dbo.collection("movies").find().toArray();

    res.json(Movies).end();
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const response = await dbo
      .collection("movies")
      .deleteOne({ _id: new ObjectId(req.body.id) });

    res.json(response).end();
    console.log(response);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
