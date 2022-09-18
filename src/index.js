import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/custom.css";

import AdminLayout from "layouts/AdminLayout";
import AuthLayout from "layouts/AuthLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route  path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Route path="/nsph" render={(props) => <ProtectedRoute {...props} />} /> */}
      {/* <Redirect from="/" to="/auth/login" /> */}
    </Switch>
  </BrowserRouter>
);
