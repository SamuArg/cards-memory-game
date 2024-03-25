import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="header">
        <h1 className="title">Memory Cards Game</h1>
        <ul className="scores">
          <li>Best Score :</li>
          <li>Current Score :</li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: Tahoma, sans-serif;
  .header {
    display: flex;
    justify-content: space-around;
  }
  ul {
    list-style: none;
  }
`;

export default Header;
