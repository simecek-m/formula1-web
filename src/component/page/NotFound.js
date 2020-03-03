import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import Button from "component/button/Button";
import { useTranslation } from "react-i18next";
import theme from "theme";
import { useHistory } from "react-router-dom";

const StyledNotFound = styled.div`
  text-align: center;
  margin-top: 25vh;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 150px;
`;

const StyledText = styled.div`
  font-size: 35px;
  margin: 30px 0 50px 0;
`;

function NotFound() {
  const { t } = useTranslation("notFound");
  const history = useHistory();
  return (
    <StyledNotFound className="animated fadeIn">
      <StyledIcon icon={faFolderOpen} />
      <StyledText>{t("pageNotFound")}</StyledText>
      <Button
        size="28px"
        icon={faHome}
        color={theme.status.info}
        dark
        onClick={() => history.push("/")}
      >
        {t("home")}
      </Button>
    </StyledNotFound>
  );
}

export default NotFound;
