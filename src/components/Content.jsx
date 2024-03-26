import Card from "./Card";
import styled from "styled-components";
import { useState } from "react";
const Content = ({ pokemonList, onClick, onFail }) => {
  const [clickedStates, setClickedStates] = useState(
    pokemonList.map(() => false)
  );
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [shuffledList, setShuffledList] = useState(pokemonList);
  const handleClick = (index) => {
    if (!clickedStates[index]) {
      const newClickedStates = [...clickedStates];
      newClickedStates[index] = true;
      setClickedStates(newClickedStates);
      onClick();
    } else {
      handleFail();
    }
    setShuffledList(shuffleArray([...shuffledList]));
  };
  const handleFail = () => {
    onFail();
    setClickedStates(pokemonList.map(() => false));
  };
  return (
    <Container>
      <ul>
        {shuffledList.map((pokemon, index) => {
          return (
            <li key={pokemon.pokemonName}>
              <Card
                image={pokemon.image}
                name={pokemon.pokemonName}
                onClick={() => handleClick(index)}
                clicked={clickedStates[index]}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 80%;
  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    column-gap: 20%;
    row-gap: 10%;
  }
  li {
    text-align: center;
  }
`;

export default Content;
