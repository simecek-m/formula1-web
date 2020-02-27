import React from "react";
import styled from "styled-components";
import NavigationItem from "component/navigation/NavigationItem";

const StyledHeader = styled.div`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  padding: 15px;
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/about">About</NavigationItem>
    </StyledHeader>
  );
}

export default Header;
