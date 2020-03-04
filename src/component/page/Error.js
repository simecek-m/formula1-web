import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "component/button/Button";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const StyledError = styled.div`
  margin-top: 30vh;
  text-align: center;
`;

const MainText = styled.div`
  font-size: 32px;
`;

const Description = styled.div`
  font-size: 20px;
  font-style: italic;
  margin: 10px 0 35px 0;
`;

function Error() {
  const { t } = useTranslation("error");
  const history = useHistory();
  return (
    <StyledError className="animated fadeIn">
      <MainText>{t("wentWrong")}</MainText>
      <Description>{t("tryAgainLater")}</Description>
      <Button icon={faRedoAlt} onClick={() => history.go(0)}>
        {t("repeat")}
      </Button>
    </StyledError>
  );
}

export default Error;
