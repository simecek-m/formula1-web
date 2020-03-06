import React from "react";
import styled from "styled-components";

const StyledDriverCard = styled.div`
  text-align: center;
  padding: 5px;
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
`;

const Avatar = styled.img`
  height: 270px;
  width: 270px;
  object-fit: cover;
`;

const NumberWrapper = styled.div`
  position: absolute;
  bottom: 70px;
  width: 100%;
`;

const Number = styled.span`
  color: ${props => props.theme.fg};
  font-size: 30px;
  background: ${props => props.theme.bg};
  border-radius: 50px 50px 0 0;
  display: inline-block;
  width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  vertical-align: middle;
`;

const Name = styled.div`
  margin-top: 15px;
  color: ${props => props.theme.fg};
  font-size: 22px;
`;

const Team = styled.div`
  color: ${props => props.theme.fg};
  font-size: 18px;
  margin-bottom: 10px;
`;

function DriverCard({
  driver: {
    firstname = "Unknown",
    lastname = "Unknown",
    picture = "/img/avatar.svg",
    team = "Unknown",
    position = 0,
    teamColor = "white"
  },
  onClick
}) {
  return (
    <StyledDriverCard teamColor={teamColor} onClick={onClick}>
      <Avatar src={picture} />
      <NumberWrapper>
        <Number>{position}</Number>
      </NumberWrapper>
      <Name>
        {firstname} {lastname}
      </Name>
      <Team>{team}</Team>
    </StyledDriverCard>
  );
}

export default DriverCard;
