import React from "react";
import { useLocation, Switch, Redirect, Route } from "react-router-dom";


import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/fontawesome-free-solid";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";
// import logo from "assets/img/reactlogo.png";

import AddUser from "views/AddUser";
import EditUser from "views/EditUser";
import VoiceCall from "views/VoiceCall";
import NotFound from "views/NotFound";

function AdminLayout(props) {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("white");

  const [showModal, setShowModal] = React.useState(false);

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

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) > -1) {
        return routes[i].name;
      }
    }

    return  location.pathname.split("/").pop();
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
          {/* <Button
            className="btn-fill btn-wd"
            variant="info"
            onClick={() => setShowModal(true)}
          >
            Launch Modal
          </Button> */}
          <AdminNavbar />
          <div className="content" id={getBrandText()}>
            {loggedInUser ? (
              <>
                <Switch>
                  {getRoutes(routes)} 
                  <Route
                    exact
                    path={"/admin/user/add"}
                    component={AddUser}
                  ></Route>{" "}
                      <Route
                    exact
                    path={"/admin/user/edit/:id"}
                    component={EditUser}
                  ></Route>
                  <Route
                    exact
                    path={"/admin/call/voice-call"}
                    component={VoiceCall}
                  ></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </>
            ) : (
              <>
                {/* <Switch>
                  <Redirect to="/auth/login" />
                </Switch> */}

                <Switch>
                  {getRoutes(routes)}
                  <Route
                    exact
                    path={"/admin/user/add"}
                    component={AddUser}
                  ></Route>{" "}
                  <Route
                    exact
                    path={"/admin/user/edit"}
                    component={EditUser}
                  ></Route>
                  <Route
                    exact
                    path={"/admin/call/voice-call"}
                    component={VoiceCall}
                  ></Route>
                 
                 <Route component={NotFound}/>
                </Switch>
              </>
              // <CaseLayout role="admin" />
            )}
          </div>
          <Footer />
        </div>
      </div>

      {/* Mini Modal */}
      <Modal
        className="modal-mini modal-primary"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header className="justify-content-center">
          {/* <div className="modal-profile">
            <i className="nc-icon nc-bulb-63"></i>
          </div> */}
          <div className="logo-img">
            <img src={require("assets/img/logo-sm.png")} alt="..." />
          </div>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex align-items-center py-1 flex-column">
            <div className="position-relative">
              <div className="avatar-box bg-light-danger">
                <span className="avatar-label">BM</span>
              </div>
            </div>
            <div className="flex-grow-1 ml-3">
              <span className="chat-username-sm">Bertha Martin</span>
              <div className="text-muted small">
                <em> Incoming Call </em>
              </div>
            </div>
          </div>

          <p>+977-9812345678</p>
        </Modal.Body>
        <div className="modal-footer">
          <div className="call-control-btns d-flex justify-content-center w-100">
            <button
              type="button"
              className="mr-2 btn-circle btn-start-call d-md-inline-block btn"
            >
              {/* <FontAwesomeIcon icon="fas fa-phone-alt" /> */}
              <FontAwesomeIcon icon={faPhone} />
            </button>
            <button
              type="button"
              className="mr-2 btn-circle btn-end-call d-md-inline-block btn"
            >
              {/* <FontAwesomeIcon icon="fas fa-phone-alt" /> */}
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {/* <Button
            className="btn-simple"
            type="button"
            variant="link"
            onClick={() => setShowModal(false)}
          >
            Back
          </Button>
          <Button
            className="btn-simple"
            type="button"
            variant="link"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button> */}
        </div>
      </Modal>
      {/* End Modal */}
    </>
  );
}

export default AdminLayout;
