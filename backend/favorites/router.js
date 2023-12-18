import express from "express";
import cors from "cors";
import { addFavorite, removeFavorite, getFavorites } from "./controller.js";

export const router = new express.Router();

router.post("/", addFavorite);
router.get("/", getFavorites);
router.delete("/", removeFavorite);
