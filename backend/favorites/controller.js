import { dbo } from "../utils/db.js";


export const addFavorite = async (req, res) => {
  try {
    const Movie = await dbo.collection("favorites").insertOne(req.body);

    Movie.acknowledged ? res.json(Movie).end() : res.status(500).end();
    console.log("add", Movie);
  } catch (err) {
    console.log("add fav error", err);
    res.status(500).end();
  }
};

export const getFavorites = async (req, res) => {
  try {
    const Favorites = await dbo.collection("favorites").find().toArray();

    res.json(Favorites).end();
  } catch (err) {
    console.log("get fav error", err);
    res.status(500).end();
  }
};

export const removeFavorite = async (req, res) => {
  console.log(req.body);
  try {
    const response = await dbo
      .collection("favorites")
      .deleteOne({ _id: req.body.id });

    res.json(response).end();
  } catch (err) {
    console.log("del fav error", err);
    res.status(500).end();
  }
};
