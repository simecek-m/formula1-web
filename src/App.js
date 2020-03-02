import React from "react";
import "./App.css";
import Navigation from "component/navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "component/page/About";
import NotFound from "component/page/NotFound";
import Drivers from "component/page/Drivers";
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Drivers} />
        <Route path="/about" component={About} />
        <Route path={["/404", "*"]} component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
