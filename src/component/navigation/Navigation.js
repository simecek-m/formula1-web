import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const StyledNavigation = styled.div`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  padding: 15px;
  text-align: center;
  height: 30px;
  position: fixed;
  width: 100%;
  box-shadow: 0 5px 10px 0 ${props => props.theme.bg};
`;

const NavigationItem = styled(NavLink)`
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

function Navigation() {
  const { t } = useTranslation("navigation");
  return (
    <StyledNavigation>
      <NavigationItem to="/drivers">{t("drivers")}</NavigationItem>
      <NavigationItem to="/teams">{t("teams")}</NavigationItem>
      <NavigationItem to="/season">{t("season")}</NavigationItem>
    </StyledNavigation>
  );
}

export default Navigation;
