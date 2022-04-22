import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const url = "http://localhost:5000";
  const name = useParams();
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/pokemon-detail/info/${Object.values(name)}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <div>
      <h1>Pokemon Detail</h1>
      {Object.entries(pokemon).map(([key]) => {
        return (
          <div key={key}>
            <p>{pokemon[key].name}</p>
            <img src={`${pokemon[key].front_default}`} alt="pokemonImg" />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonDetail;
