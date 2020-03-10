import React, { useContext } from "react";
import NotificationContext from "notification/context";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledNotification = styled.div`
  color: ${props => props.color};
  background: ${props => props.background};
  display: ${props => (props.visible ? "flex" : "none")};
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 15px;
  cursor: pointer;
  max-width: 250px;
  max-height: 300px;
  overflow: hidden;
  user-select: none;
  box-shadow: 2px 2px 2px black;
  transition: 0.3s ease all;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  min-width: 50px;
  margin: 10px 10px 10px 0;
`;

const StyledText = styled.div`
  margin: auto auto;
`;

const StyledTitle = styled.div`
  font-weight: bold;
`;
const StyledDescription = styled.div`
  font-size: 14px;
`;

function Notification() {
  const { notification, hide } = useContext(NotificationContext);
  const icon = notification.icon ? (
    <StyledIcon icon={notification.icon} />
  ) : null;
  return (
    <StyledNotification
      className="animated fadeIn"
      visible={notification.visible}
      color={notification.color}
      background={notification.background}
      onClick={notification.onClick || hide}
    >
      {icon}
      <StyledText>
        <StyledTitle>{notification.title}</StyledTitle>
        <StyledDescription>{notification.text}</StyledDescription>
      </StyledText>
    </StyledNotification>
  );
}

export default Notification;
