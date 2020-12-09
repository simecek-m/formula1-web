import React from "react";
import styled from "styled-components";
import theme from "theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.button`
  color: ${props => props.color};
  font-size: ${props => props.size};
  border: 4px solid ${props => props.color};
  font-weight: bold;
  margin: 10px auto;
  padding: 15px 20px;
  background: none;
  cursor: pointer;
  outline: none;
  display: block;
  transition: 0.5s ease all;
  :hover {
    color: ${props => (props.dark ? theme.color.white : theme.color.black)};
    background: ${props => props.color};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

function Button({
  icon = null,
  children,
  color = theme.fg,
  size = "22px",
  dark = true,
  onClick
}) {
  const buttonIcon = icon ? <StyledIcon icon={icon} /> : null;
  return (
    <StyledButton onClick={onClick} color={color} size={size} dark={dark}>
      {buttonIcon}
      {children.toUpperCase()}
    </StyledButton>
  );
}

export default Button;
