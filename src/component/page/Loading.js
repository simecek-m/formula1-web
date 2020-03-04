import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledLoading = styled.div`
  margin-top: 30vh;
  text-align: center;
  font-size: 32px;
`;

function Loading() {
  const { t } = useTranslation("loading");
  return (
    <StyledLoading className="animated fadeIn">{t("loading")}</StyledLoading>
  );
}

export default Loading;
