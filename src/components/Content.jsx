import Card from "./Card";
import styled from "styled-components";
import { useState } from "react";
const Content = ({ pokemonList, onClick, onFail }) => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [shuffledList, setShuffledList] = useState(
    shuffleArray(pokemonList.map((pokemon) => ({ ...pokemon, clicked: false })))
  );
  const handleClick = (index) => {
    const clickedCard = shuffledList[index];
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      onClick();
      setShuffledList(shuffleArray([...shuffledList]));
    } else {
      handleFail();
    }
  };
  const handleFail = () => {
    onFail();
    const resetList = shuffledList.map((pokemon) => ({
      ...pokemon,
      clicked: false,
    }));
    setShuffledList(shuffleArray(resetList));
  };
  return (
    <Container>
      <ul>
        {shuffledList.slice(0, 9).map((pokemon, index) => {
          return (
            <li key={pokemon.pokemonName}>
              <Card
                image={pokemon.image}
                name={pokemon.pokemonName}
                onClick={() => handleClick(index)}
                clicked={pokemon.clicked.toString()}
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
