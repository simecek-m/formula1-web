import React, { useState, useRef } from "react";
import NotificationContext from "notification/context";
import theme from "theme";

const DEFAULT_TIMER = 5000;

export const DEFAULT_NOTIFICATION = {
  visible: false,
  icon: "",
  title: "",
  text: "",
  color: "black",
  background: theme.status.info,
  timer: DEFAULT_TIMER
};

function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({});
  let timer = useRef();
  const show = data => {
    const notification = { ...DEFAULT_NOTIFICATION, ...data, visible: true };
    setNotification(notification);
    timer.current = setTimeout(() => {
      hide();
    }, notification.timer);
  };
  const hide = () => {
    setNotification({ ...notification, visible: false });
    clearTimeout(timer.current);
  };
  return (
    <NotificationContext.Provider
      value={{
        notification,
        show,
        hide
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
