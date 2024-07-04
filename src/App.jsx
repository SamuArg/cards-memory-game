import Body from "./components/Body";
import { useState, useEffect } from "react";

function App() {
  const createList = (quantity) => {
    let pokemonsList = [];
    for (let i = 0; i < quantity; i++) {
      let number = -1;
      while (number < 0 || pokemonsList.includes(number)) {
        number = Math.floor(Math.random() * 1025) + 1;
      }
      pokemonsList.push(number);
    }
    return pokemonsList;
  };

  const getPokemonList = async () => {
    const pokemonsList = createList(6);
    const list = await Promise.all(pokemonsList.map(getPokemon));
    return list;
  };

  const getPokemon = async (number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const pokeObj = await response.json();
    const image = pokeObj.sprites.front_default;
    const pokemonName = pokeObj.forms[0].name;
    return { pokemonName, image };
  };
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    createList(6);
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
