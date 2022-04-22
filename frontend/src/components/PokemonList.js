import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const url = "http://localhost:5000";
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/pokemon-list`)
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemonList.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <Link to={`/pokemon-detail/${pokemon.name}`}>
              <p>{pokemon.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
