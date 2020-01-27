import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";

import "./App.css";

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route
            path="/"
            render={props => {
              const token = localStorage.getItem("token");
              console.log(token);
              if (token === null) {
                return <Redirect to="/signin" />;
              }
              return <Home {...props} token={token} />;
            }}
            component={Home}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
