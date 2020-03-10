import React, { useContext, useEffect, useRef, useState } from "react";
import DriverCard from "component/card/DriverCard";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { SERVER_HOST, SERVER_PORT } from "constant";
import { useHistory } from "react-router-dom";
import Loading from "component/page/Loading";
import Error from "component/page/Error";
import NotificationContext from "notification/context";
import theme from "theme";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const StyledDriversPage = styled.div`
  max-width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const DRIVERS_QUERY = gql`
  query {
    drivers {
      _id
      firstname
      lastname
      picture
      number
      team {
        name
        color
      }
    }
  }
`;

function Drivers() {
  const history = useRef(useHistory());
  const { loading, error, data } = useQuery(DRIVERS_QUERY);
  const notification = useRef(useContext(NotificationContext));
  const [driverCards, setDriverCards] = useState([]);
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
      const elements = data.drivers.map((driver, index) => {
        const cardData = {
          firstname: driver.firstname,
          lastname: driver.lastname,
          position: driver.number,
          picture: `${SERVER_HOST}:${SERVER_PORT}${driver.picture}`,
          team: driver.team.name,
          teamColor: driver.team.color
        };
        return (
          <DriverCard
            key={index}
            driver={cardData}
            onClick={() => history.current.push(`/drivers/${driver._id}`)}
          />
        );
      });
      setDriverCards(elements);
    }
  }, [error, data]);
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <StyledDriversPage className="animated fadeIn">
      {driverCards}
    </StyledDriversPage>
  );
}

export default Drivers;
