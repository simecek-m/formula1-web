import React, { useContext } from "react";
import NotificationContext from "notification/context";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const notification = useContext(NotificationContext);
  return (
    <div>
      <button
        onClick={() =>
          notification.show({
            icon: faMailBulk,
            title: "Notification",
            text: "Something went wrong. Try again later.",
            color: "black",
            background: "lightblue",
            onClick: () => console.log("click on notification")
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
