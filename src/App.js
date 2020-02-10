import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import NotFound from "./pages/NotFound";
import { history } from "./redux/create";

import "./App.css";

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/signout" component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
