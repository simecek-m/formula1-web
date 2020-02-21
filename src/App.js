import React from "react";
import "./App.css";
import styled from "styled-components";

const StyledLine = styled.div`
  color: ${props => props.color || props.theme.fn};
  background: ${props => props.background || props.theme.bg};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  padding: 15px;
  text-align: center;
`;

function App() {
  return <StyledLine>Visual primitives for the component age.</StyledLine>;
}

export default App;
