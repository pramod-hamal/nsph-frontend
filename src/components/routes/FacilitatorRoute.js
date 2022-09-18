import React from "react";
import { useLocation, Switch, Redirect } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
import CaseLayout from "components/routes/CaseRoute";

function FacilitatorRoute(props) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("white");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

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
  // if (!loggedInUser) {
  //   props.history.push("/auth/login");
  // }

  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            {loggedInUser ? (
              <CaseLayout role="admin" />
            ) : (
              // <Switch>
              //   <Redirect to="/auth/login" />
              // </Switch>
              <CaseLayout role="admin" />
            )}
          </div>
          <Footer />
        </div>
      </div>
      {/* <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />{" "} */}
    </>
  );
}

export default FacilitatorRoute;
