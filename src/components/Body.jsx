import Header from "./Header";
import Content from "./Content";
const Body = ({ pokemonList }) => {
  return (
    <div>
      <Header />
      <Content pokemonList={pokemonList} />
    </div>
  );
};

export default Body;
