import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "component/page/Home";
import NotFound from "component/page/NotFound";
import Drivers from "component/page/Drivers";
import Driver from "component/page/Driver";
import "animate.css";
import styled from "styled-components";
import Notification from "notification";
import Page from "component/page/Page";

const StyledApp = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Page Component={Home}/>} />
          <Route exact path="/drivers" render={() => <Page Component={Drivers}/>} />
          <Route path="/drivers/:id" render={() => <Page Component={Driver}/>}/>
          <Route path={["/404", "*"]} render={() => <Page Component={NotFound}/>} />
        </Switch>
      </BrowserRouter>
      <Notification />
    </StyledApp>
  );
}

export default App;
