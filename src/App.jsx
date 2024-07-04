import Body from "./components/Body";
import { useState, useEffect } from "react";

function App() {
  const [best, setBest] = useState(0);
  const [isOver, setIsOver] = useState(true);
  const handleGameOver = () => {
    setPokemonData(null);
    setIsOver(true);
  };
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
    const pokemonsList = createList(30);
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
    if (isOver) {
      getPokemonList()
        .then((data) => setPokemonData(data))
        .then(setIsOver(false))
        .catch((error) => console.error(error));
    }
  }, [isOver]);
  return pokemonData ? (
    <Body
      pokemonList={pokemonData}
      handleGameOver={handleGameOver}
      best={best}
      setBest={setBest}
    />
  ) : (
    <div>Loading...</div>
  );
}

export default App;
