import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavigationLink = styled(NavLink)`
  color: ${props => props.theme.fg};
  margin: 10px;
  opacity: 0.7;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease all;
  text-decoration: none;
  :hover,
  &.selected {
    opacity: 1;
  }
`;

function NavigationLink({ to = "/404", children = "Unknown" }) {
  return (
    <StyledNavigationLink exact to={to} activeClassName="selected">
      {children}
    </StyledNavigationLink>
  );
}

export default NavigationLink;
