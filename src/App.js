import React from "react";
import "./App.css";
import Navigation from "component/navigation/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "component/page/About";
import NotFound from "component/page/NotFound";
import Home from "component/page/Home";
import "animate.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
