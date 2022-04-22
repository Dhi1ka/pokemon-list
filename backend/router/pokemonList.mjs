import { Router } from "express";
import fetch from "node-fetch";

const pokemonListRouter = Router();

pokemonListRouter.get("/", async (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default pokemonListRouter;
