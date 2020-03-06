import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "component/page/Loading";
import Error from "component/page/Error";
import styled from "styled-components";
import { SERVER_HOST, SERVER_PORT } from "constant";

const DRIVER_QUERY = gql`
  query($id: String!) {
    driver(id: $id) {
      firstname
      lastname
      birthday
      height(unit: METER)
      position
      points
      number
      picture
      team {
        name
      }
      country {
        name
        flag
      }
    }
  }
`;

const StyledDriverDetail = styled.div``;

const Avatar = styled.img`
  height: 500px;
  width: 300px;
  object-fit: cover;
`;

const Text = styled.div``;

function Driver() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(DRIVER_QUERY, {
    variables: { id }
  });
  console.log(data);
  const driver = data ? data.driver : null;
  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <StyledDriverDetail>
      <Avatar src={`${SERVER_HOST}:${SERVER_PORT}${driver.picture}`} />
      <Text>{driver.firstname}</Text>
      <Text>{driver.lastname}</Text>
      <Text></Text>
    </StyledDriverDetail>
  );
}

export default Driver;
