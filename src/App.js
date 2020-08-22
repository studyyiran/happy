import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { routerConfig } from "./pages/routerConfig";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routerConfig.map(({ path, Component, exact, ...otherConfig }) => (
          <Route
            exact={exact}
            key={path}
            path={path}
            component={hocWithLayout(Component, otherConfig)}
          />
        ))}
        <Redirect to={routerConfig[0].path} />
      </Switch>
    </BrowserRouter>
  );
};

function hocWithLayout(Component, otherConfig) {
  const { title } = otherConfig;
  const NewComponent = (routerProps) => {
    useEffect(() => {
      console.log("get it");
      document.title = title;
    }, []);
    return (
      <div className="layout">
        <header></header>
        <main>
          <Component {...routerProps} />
        </main>
      </div>
    );
  };
  return NewComponent;
}
