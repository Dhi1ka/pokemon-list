import { Router } from "express";
import fetch from "node-fetch";

const pokemonDetailRouter = Router();

pokemonDetailRouter.get("/info/:name", async (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const name = req.params.name;

  try {
    const response = await fetch(`${url}/${name}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

pokemonDetailRouter.get("/catch/:name", async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(500).json(error);
  }
});

pokemonDetailRouter.get("/release/:name", async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(500).json(error);
  }
});

pokemonDetailRouter.get("/rename/:name", async (req, res) => {
  try {
    //
  } catch (error) {
    res.status(500).json(error);
  }
});

export default pokemonDetailRouter;
