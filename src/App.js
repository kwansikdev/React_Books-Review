import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import NotFound from "./pages/NotFound";
import AddBook from "./components/AddBook";

import "./App.css";

const ErrorFallbackComponent = ({ error }) => <div>{error.message}</div>;

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <BrowserRouter>
        <Switch>
          <Route path="/signout" component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
