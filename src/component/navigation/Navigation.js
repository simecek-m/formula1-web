import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import NavigationItem from "component/navigation/NavigationItem";

const StyledNavigation = styled.div`
  color: ${props => props.theme.fg};
  padding: 15px;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Navigation() {
  const { t } = useTranslation("navigation");
  return (
    <StyledNavigation>
      <NavigationItem to="/" icon="/icons/home.svg">{t("home")}</NavigationItem>
      <NavigationItem to="/drivers" icon="/icons/helmet.svg">{t("drivers")}</NavigationItem>
      <NavigationItem to="/teams" icon="/icons/car.svg">{t("teams")}</NavigationItem>
      <NavigationItem to="/season" icon="/icons/cup.svg">{t("season")}</NavigationItem>
    </StyledNavigation>
  );
}

export default Navigation;
