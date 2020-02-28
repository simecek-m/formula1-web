import React from "react";
import styled from "styled-components";

const StyledDriverCard = styled.div`
  padding: 15px;
  display: inline-block;
  margin: 20px;
  background: ${props => props.theme.bg};
  border-radius: 5px 5px 0px 0px;
  border-bottom: 5px solid ${props => props.teamColor};
  transition: 0.5s ease all;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
  position: relative;
  border-radius: 15px 15px 0 0;
`;

const Avatar = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;

const PositionWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 70px;
  width: 250px;
`;

const Position = styled.span`
  color: ${props => props.theme.fg};
  font-size: 38px;
  background: ${props => props.theme.bg};
  padding: 10px 20px 0px 20px;
  border-radius: 50px 50px 0 0;
`;

const Name = styled.div`
  margin-top: 15px;
  color: ${props => props.theme.fg};
  font-size: 22px;
`;

const Team = styled.div`
  color: ${props => props.theme.fg};
  font-size: 18px;
`;

function DriverCard({ driver = {}, onClick }) {
  const {
    firstname = "Unknown",
    lastname = "Unknown",
    picture = "/img/avatar.svg",
    team = "Unknown",
    position = 0,
    teamColor = "white"
  } = driver;
  return (
    <StyledDriverCard teamColor={teamColor} onClick={onClick}>
      <Avatar src={picture} />
      <PositionWrapper>
        <Position>{position}</Position>
      </PositionWrapper>
      <Name>
        {firstname} {lastname}
      </Name>
      <Team>{team}</Team>
    </StyledDriverCard>
  );
}

export default DriverCard;
