import styled from "styled-components";

const Card = ({ image, name, onClick, clicked }) => {
  return (
    <Container onClick={onClick} clicked={clicked}>
      <img src={image}></img>
      <p>{name}</p>
    </Container>
  );
};

const Container = styled.div`
  font-family: Tahoma, sans-serif;
  border: solid 1px black;
  border-radius: 10%;
  cursor: pointer;
  img {
    width: 50%;
  }
`;

export default Card;
