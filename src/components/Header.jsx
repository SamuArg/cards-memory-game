import styled from "styled-components";

const Header = ({ best, current }) => {
  return (
    <Container>
      <div className="header">
        <h1 className="title">Memory Cards Game</h1>
        <ul className="scores">
          <li>Best Score : {best}</li>
          <li>Current Score : {current}</li>
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
