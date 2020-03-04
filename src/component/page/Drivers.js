import React from "react";
import DriverCard from "component/card/DriverCard";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { SERVER_HOST, SERVER_PORT } from "constant";
import { useHistory } from "react-router-dom";
import Loading from "component/page/Loading";
import Error from "component/page/Error";

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
  const history = useHistory();
  const { loading, error, data } = useQuery(DRIVERS_QUERY);
  let drivers = [];
  if (data) {
    drivers = data.drivers.map((driver, index) => {
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
          onClick={() => history.push(`/drivers/${driver._id}`)}
        />
      );
    });
  }
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <StyledDriversPage className="animated fadeIn">{drivers}</StyledDriversPage>
  );
}

export default Drivers;
