import React from "react";
import DriverCard from "component/card/DriverCard";
import styled from "styled-components";

const HAMILTON = {
  firstname: "Lewis",
  lastname: "Hamilton",
  team: "Mercedes",
  position: 1,
  picture:
    "https://cdn-8.motorsport.com/images/mgl/24vRALz6/s9/lewis-hamilton-mercedes-amg-f1-1.jpg",
  teamColor: "cyan"
};

const VETTEL = {
  firstname: "Sebastian",
  lastname: "Vettel",
  team: "Ferrari",
  position: 2,
  picture:
    "https://www.fia.com/sites/default/files/styles/content_details/public/news/main_image/img91.jpg?itok=GwGhAzi9",
  teamColor: "red"
};

const StyledHomePage = styled.div`
  background: ${props => props.theme.contrast};
  min-height: calc(100vh - 60px);
  text-align: center;
`;

function Home() {
  return (
    <StyledHomePage className="animated fadeIn">
      <DriverCard
        driver={HAMILTON}
        onClick={() => console.log("clicked on hamilton")}
      />
      <DriverCard
        driver={VETTEL}
        onClick={() => console.log("clicked on vettel")}
      />
    </StyledHomePage>
  );
}

export default Home;
