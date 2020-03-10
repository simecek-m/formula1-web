import React, { useContext } from "react";
import NotificationContext from "notification/context";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import theme from "theme";

function Home() {
  const notification = useContext(NotificationContext);
  return (
    <div>
      <button
        onClick={() =>
          notification.show({
            icon: faExclamation,
            title: "404 Not Found",
            text: "Something went wrong. Try again later.",
            color: theme.color.white,
            background: theme.status.danger
          })
        }
      >
        show
      </button>
      <button onClick={() => notification.hide()}>hide</button>
    </div>
  );
}

export default Home;
