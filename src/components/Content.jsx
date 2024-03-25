import Card from "./Card";
import styled from "styled-components";
const Content = ({ pokemonList }) => {
  return (
    <Container>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <li key={pokemon.pokemonName}>
              <Card image={pokemon.image} name={pokemon.pokemonName} />
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
