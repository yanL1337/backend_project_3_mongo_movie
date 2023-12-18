import express from "express";
import cors from "cors";
import { addMovie, deleteMovie, getMovies } from "./controller.js";

export const router = new express.Router();

router.post("/", addMovie);
router.get("/", getMovies);
router.delete("/", deleteMovie);
