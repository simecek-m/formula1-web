import React, { useEffect, useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "component/page/Loading";
import Error from "component/page/Error";
import styled from "styled-components";
import { SERVER_HOST, SERVER_PORT } from "constant";
import NotificationContext from "notification/context";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import theme from "theme";
import { useTranslation } from "react-i18next";

const DRIVER_QUERY = gql`
  query($id: String!) {
    driver(id: $id) {
      firstname
      lastname
      birthday
      height(unit: CENTIMETER)
      position
      points
      number
      picture
      team {
        name
        color
      }
      country {
        name
        flag
      }
    }
  }
`;

const StyledDriverDetail = styled.div`
  min-height: calc(100vh - 60px);
`;

const DriverSection = styled.div`
  padding: 50px;
  display: flex;
  min-height: calc(100vh - 160px);
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  height: 500px;
  width: 400px;
  margin: 50px;
  object-fit: cover;
  border-radius: 40px 0 0 0;
  box-shadow: -10px -10px 0 0 ${props => props.color};
`;

const Description = styled.div`
  margin: 50px;
`;

const Row = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;

const Property = styled.div`
  display: inline-block;
  width: 200px;
`;

const Value = styled.div`
  display: inline-block;
  font-weight: bold;
`;

function Driver() {
  const { t } = useTranslation("driver");
  const { id } = useParams();
  const { loading, error, data } = useQuery(DRIVER_QUERY, {
    variables: { id }
  });
  const notification = useRef(useContext(NotificationContext));
  const [driver, setDriver] = useState({});
  useEffect(() => {
    if (error) {
      notification.current.show({
        icon: faExclamationCircle,
        title: "API Error",
        text: error.message,
        color: theme.color.white,
        background: theme.status.danger
      });
    } else if (data) {
      setDriver(data.driver);
    }
  }, [error, data]);
  const { team: { color = theme.color.white, name: team } = {} } = driver;
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <StyledDriverDetail>
      <DriverSection>
        <Avatar
          src={`${SERVER_HOST}:${SERVER_PORT}${driver.picture}`}
          color={color}
        />
        <Description color={color}>
          <Row>
            <Property>{t("firstname")}</Property>
            <Value>{driver.firstname}</Value>
          </Row>
          <Row>
            <Property>{t("lastname")}</Property>
            <Value>{driver.lastname}</Value>
          </Row>
          <Row>
            <Property>{t("born")}</Property>
            <Value>{driver.birthday}</Value>
          </Row>
          <Row>
            <Property>{t("height")} (cm)</Property>
            <Value>{driver.height}</Value>
          </Row>
          <Row>
            <Property>{t("number")}</Property>
            <Value>{driver.number}</Value>
          </Row>
          <Row>
            <Property>{t("position")}</Property>
            <Value>{driver.position}</Value>
          </Row>
          <Row>
            <Property>{t("points")}</Property>
            <Value>{driver.points}</Value>
          </Row>
          <Row>
            <Property>{t("team")}</Property>
            <Value>{team}</Value>
          </Row>
        </Description>
      </DriverSection>
    </StyledDriverDetail>
  );
}

export default Driver;
