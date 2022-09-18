import React from "react";
import {
  Route, Switch,

} from "react-router-dom";

import routes from "routes.js";

import AddUser from "views/AddUser";

function AdminRoute(props) {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
            exact
          />
        );
      }
    });
  };

  return (
    <>
    <Switch>
      {getRoutes(routes)}
      <Route exact path={"/admin/user/add"} component={AddUser}></Route>{" "}
    </Switch>
    </>
  );
}

export default AdminRoute;
