import React from "react";
import styled from "styled-components";
import NavigationItem from "component/navigation/NavigationItem";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.div`
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  padding: 15px;
  text-align: center;
  height: 30px;
`;

function Header() {
  const { t } = useTranslation("navigation");
  return (
    <StyledHeader>
      <NavigationItem to="/">{t("drivers")}</NavigationItem>
      <NavigationItem to="/teams">{t("teams")}</NavigationItem>
      <NavigationItem to="/season">{t("season")}</NavigationItem>
    </StyledHeader>
  );
}

export default Header;
