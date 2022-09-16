
import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "layouts/AdminLayout";
function ProtectedRoute() {
  return (
    <div>
        <div> This is something</div>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route
          path="/facilitator"
          render={(props) => <AdminLayout {...props} />}
        />
      </Switch>
    </div>
  );
}

export default ProtectedRoute;
