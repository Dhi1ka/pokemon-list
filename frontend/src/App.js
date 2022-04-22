import React from "react";
import { Routes, Route } from "react-router-dom";

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import MyPokemonList from "./components/MyPokemonList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon-detail/:name" element={<PokemonDetail />} />
      <Route path="/my-pokemon-list" element={<MyPokemonList />} />
      <Route path="/*" element={<PokemonList />} />
    </Routes>
  );
};

export default App;
