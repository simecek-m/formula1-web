import React from "react";
import styled from "styled-components";
import NavigationItem from "component/navigation/NavigationItem";
import { useTranslation } from "react-i18next";

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
