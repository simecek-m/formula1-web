import React from "react";
import styled from "styled-components";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLinks = styled.div`
  display: inline-block;
  font-size: 24px;
  padding: 5px 10px;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.fg};
  opacity: 0.7;
  transition: 0.5s ease all;
  margin: 5px 10px;
  :hover {
    opacity: 1;
  }
`;

function Links({ className, web, instagram, facebook }) {
  const webLink = web ? (
    <StyledLink href={web} target="_blank">
      <FontAwesomeIcon icon={faGlobeEurope} />
    </StyledLink>
  ) : null;
  const instagramLink = instagram ? (
    <StyledLink href={instagram} target="_blank">
      <FontAwesomeIcon icon={faInstagramSquare} />
    </StyledLink>
  ) : null;
  const facebookLink = facebook ? (
    <StyledLink href={facebook} target="_blank">
      <FontAwesomeIcon icon={faFacebookSquare} />
    </StyledLink>
  ) : null;
  return (
    <StyledLinks className={className}>
      {webLink}
      {instagramLink}
      {facebookLink}
    </StyledLinks>
  );
}

export default Links;
