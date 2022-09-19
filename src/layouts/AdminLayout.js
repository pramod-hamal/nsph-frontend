import React from "react";
import { useLocation, Switch, Redirect, Route } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import AddUser from "views/AddUser";

function AdminLayout(props) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("white");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
 const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin" && prop.permission) {
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

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  const loggedInUser = localStorage.getItem("loggedInUser");


  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            {loggedInUser ? (
               <>
               <Switch>
                 {getRoutes(routes)}
                 <Route exact path={"/admin/user/add"} component={AddUser}></Route>{" "}
               </Switch>
               </>
            ) : (
              <Switch>
                <Redirect to="/auth/login" />
              </Switch>
              // <CaseLayout role="admin" />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
