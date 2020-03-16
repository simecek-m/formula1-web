import React, { useContext } from "react";
import styled from "styled-components";
import theme from "theme";
import { unsupportedFeature } from "helper/notification";
import NotificationContext from "notification/context";

const StyledUnderline = styled.span`
  background-image: ${props =>
    `linear-gradient(${props.background},${props.background})`};
  background-repeat: no-repeat;
  background-size: 100% ${props => props.backgroundSize};
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  padding: 5px;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  cursor: pointer;
  font-weight: bold;
  margin: 10px;
  &:hover {
    background-size: 100% 88%;
  }
`;

function Underline({
  children,
  color = theme.color.black,
  background = theme.color.white,
  fontSize = "18px",
  backgroundSize = "30%",
  onClick = null
}) {
  const { show } = useContext(NotificationContext);
  return (
    <StyledUnderline
      onClick={onClick || (() => show(unsupportedFeature()))}
      fontSize={fontSize}
      backgroundSize={backgroundSize}
      color={color}
      background={background}
    >
      {children}
    </StyledUnderline>
  );
}

export default Underline;
