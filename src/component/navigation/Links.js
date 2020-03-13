import React from "react";
import styled from "styled-components";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "theme";

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 24px;
  padding: 5px 10px;
  width: 100%;
  margin: 10px;
`;

const LinkText = styled.div`
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.5s;
  font-size: 16px;
  text-align: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 10px auto;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.fg};
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  transition: 0.5s ease all;
  flex-basis: 60px;
  :hover {
    opacity: 1;
    color: ${props => props.color};
    ${LinkText} {
      opacity: 1;
    }
  }
`;

function Links({ className, color = theme.fg ,web, instagram, facebook }) {
  const webLink = web ? (
    <StyledLink color={color} href={web} target="_blank">
      <LinkText>Web</LinkText>
      <StyledIcon icon={faGlobeEurope} />
    </StyledLink>
  ) : null;
  const instagramLink = instagram ? (
    <StyledLink color={color} href={instagram} target="_blank">
      <LinkText>Instagram</LinkText>
      <StyledIcon icon={faInstagramSquare} />
    </StyledLink>
  ) : null;
  const facebookLink = facebook ? (
    <StyledLink color={color} href={facebook} target="_blank">
      <LinkText>Facebook</LinkText>
      <StyledIcon icon={faFacebookSquare} />
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
