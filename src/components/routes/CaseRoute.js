import React from "react";
import FacilitatorRoute from "./FacilitatorRoute";
import AdminRoute from "./AdminRoute";

function CaseLayout(props) {
  if (props.role == "admin") {
    return <AdminRoute />;
  } else {
    return <FacilitatorRoute />;
  }
}

export default CaseLayout;
