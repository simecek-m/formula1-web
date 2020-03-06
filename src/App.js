import React from "react";
import "./App.css";
import Navigation from "component/navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "component/page/Home";
import NotFound from "component/page/NotFound";
import Drivers from "component/page/Drivers";
import Driver from "component/page/Driver";
import "animate.css";
import styled from "styled-components";
import Notification from "notification";

const StyledApp = styled.div`
  background-color: ${props => props.theme.contrast};
  color: ${props => props.theme.fg};
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/drivers" component={Drivers} />
          <Route path="/drivers/:id" component={Driver} />
          <Route path={["/404", "*"]} component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Notification />
    </StyledApp>
  );
}

export default App;
