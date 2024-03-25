import Body from "./components/Body";
import { useState, useEffect } from "react";

function App() {
  const pokemonNames = [
    "charizard",
    "pikachu",
    "bulbasaur",
    "raichu",
    "squirtle",
    "eevee",
  ];

  const getPokemonList = async () => {
    const list = await Promise.all(pokemonNames.map(getPokemon));
    return list;
  };

  const getPokemon = async (pokemonName) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokeObj = await response.json();
    const image = pokeObj.sprites.front_default;
    return { pokemonName, image };
  };
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonList()
      .then((data) => setPokemonData(data))
      .catch((error) => console.error(error));
  }, []);
  return pokemonData ? (
    <Body pokemonList={pokemonData} />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
