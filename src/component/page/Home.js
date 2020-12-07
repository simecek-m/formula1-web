import React from "react";
import styled from "styled-components";

const StyledHomePage = styled.div`
  margin: 0 auto;
  text-align: center;
  height: 100vh;
`;

const StyledCarImage = styled.img`
`;

function Home() {
  return (
    <StyledHomePage>
      <StyledCarImage src="/img/car.png" alt="logo-car"/>
    </StyledHomePage>
  );
}

export default Home;
