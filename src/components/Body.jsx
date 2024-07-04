import Header from "./Header";
import Content from "./Content";
import { useState } from "react";
const Body = ({ pokemonList, handleGameOver, best, setBest }) => {
  const [current, setCurrent] = useState(0);
  const increment = () => {
    setCurrent(current + 1);
  };
  const updateBest = () => {
    if (current > best) {
      setBest(current);
      alert(`Failed, new best score : ${current} !`);
    } else {
      alert(`Failed, best score : ${best}`);
    }
    handleGameOver();
    setCurrent(0);
  };
  return (
    <div>
      <Header best={best} current={current} />
      <Content
        pokemonList={pokemonList}
        onClick={increment}
        onFail={updateBest}
      />
    </div>
  );
};

export default Body;
