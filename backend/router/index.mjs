import express from "express";

import pokemonDetailRouter from "./pokemonDetail.mjs";
import pokemonListRouter from "./pokemonList.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hi Pokemon!",
  });
});

router.use("/pokemon-list", pokemonListRouter);
router.use("/pokemon-detail", pokemonDetailRouter);

export default router;
