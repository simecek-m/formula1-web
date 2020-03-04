import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const DRIVER_QUERY = gql`
  query($id: String!) {
    driver(id: $id) {
      firstname
      lastname
    }
  }
`;

function Driver() {
  const { id } = useParams();
  const { data } = useQuery(DRIVER_QUERY, {
    variables: { id: "5e5d209be560b89d0e937690" }
  });
  console.log("data: ", data);
  return (
    <div>
      <div>driver id: {id}</div>
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
}

export default Driver;
