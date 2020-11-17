import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  margin: 0 auto;
  text-align: center;
  background-image: url("/img/background.png");
  height: 100vh;
`;

const StyledCarImage = styled.img`
  height: 80vh;
  margin-top: 10vh;

`;

function Home() {
  return (
    <StyledHomePage>
      <StyledCarImage src="/img/car.png" alt="logo-car"/>
    </StyledHomePage>
  );
}

export default Home;
