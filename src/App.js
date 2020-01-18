import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
