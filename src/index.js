import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import "i18n";
import { SERVER_HOST, SERVER_PORT } from "constant";
import NotificationProvider from "notification/provider";

const apolloClient = new ApolloClient({
  uri: `${SERVER_HOST}:${SERVER_PORT}/graphql`
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apolloClient}>
      <NotificationProvider value={{ title: "notification" }}>
        <App />
      </NotificationProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
