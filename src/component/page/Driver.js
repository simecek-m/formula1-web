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
import { contrastOf } from "helper/colors";
import Links from "component/navigation/Links";

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
      links {
        web
        instagram
        facebook
      }
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

const Name = styled.div`
  color: ${props => props.color};
  font-size: 36px;
  font-weight: bold;
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

const TeamSection = styled.div`
  padding: 50px;
  display: flex;
  min-height: calc(100vh - 160px);
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  color: ${props => props.color};
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 36px;
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
  const {
    links: { web, instagram, facebook } = {},
    team: { color = theme.color.white, name: team } = {}
  } = driver;
  const contrastColor = contrastOf(color);
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
          <Name color={color}>{driver.firstname} {driver.lastname}</Name>
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
          <Links color={color} web={web} instagram={instagram} facebook={facebook} />
        </Description>
      </DriverSection>
      <TeamSection color={contrastColor} background={color}>
        <Header>{team}</Header>
      </TeamSection>
    </StyledDriverDetail>
  );
}

export default Driver;
