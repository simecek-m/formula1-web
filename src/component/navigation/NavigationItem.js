import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigationItem = styled(NavLink)`
  color: ${props => props.theme.fg};
  margin: 20px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease all;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledNavigationIcon = styled.img`
  height: 25px;
`;

function NavigationItem({ to = "/", icon = "/icons/home.svg" }) {
  return (
    <StyledNavigationItem to={to}>
      <StyledNavigationIcon src={icon} alt="icon" />
    </StyledNavigationItem>
  )
}

export default NavigationItem;
