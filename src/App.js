import React from "react";
import "./App.css";
import Navigation from "component/navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "component/page/NotFound";
import Drivers from "component/page/Drivers";
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Drivers} />
        <Route path={["/404", "*"]} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
