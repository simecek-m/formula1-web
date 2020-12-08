import React from "react";
import styled from "styled-components";
import Blink from "component/blink/Blink";

const StyledHomePage = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BLINK_CONTENT = [
  {
    text: "Passion",
    type: "text",
  }, {
    src: "/img/gallery/hamilton.jpg",
    type: "image"
  }, {
    text: "Power",
    type: "text"
  }, {
    src: "/img/gallery/fly.jpg",
    type: "image",
  }, {
    text: "Formula 1",
    color: "#ba0000",
    fontSize: "64px"
  }
]

function Home() {
  return (
    <StyledHomePage>
      <Blink content={BLINK_CONTENT}/>
    </StyledHomePage>
  );
}

export default Home;
