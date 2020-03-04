import React from "react";
import "./App.css";
import Navigation from "component/navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "component/page/NotFound";
import Drivers from "component/page/Drivers";
import Driver from "component/page/Driver";
import "animate.css";
import styled from "styled-components";

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
          <Route exact path="/" component={Drivers} />
          <Route path="/drivers/:id" component={Driver} />
          <Route path={["/404", "*"]} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
