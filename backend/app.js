import "dotenv/config";
import cors from "cors";
import express from "express";
import { router as moviesRouter } from "./movies/router.js";
import { router as favoritesRouter } from "./favorites/router.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/movies", moviesRouter);
server.use("/api/favorites", favoritesRouter);
server.listen(process.env.PORT, () =>
  console.log(`Fliegt jetzt sogar mit: ${process.env.PORT} Sachen`)
);
