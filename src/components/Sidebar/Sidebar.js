import React from "react";
import { useLocation, NavLink, Redirect } from "react-router-dom";
import { Nav } from "react-bootstrap";
import auth from "utility/auth";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  let content = user ? <div className="sidebar bg-white">
  <div className="sidebar-wrapper">
    <div className="logo d-flex align-items-center justify-content-center">
      <a href="" className="simple-text logo-mini mx-1">
        <div className="logo-img">
          <img src={require("assets/img/logo-white.png")} alt="..." />
        </div>
      </a>
      {/* <a className="simple-text" href="">
        NSPH
      </a> */}
    </div>
    <Nav>
      {routes.map((prop, key) => {
        if (
          !prop.redirect &&
          (auth(user).isRole(prop.role) ||
            auth(user).isUserAllowed(prop.permission))
        ) {
          
          return (
            <li
              className={
                prop.upgrade
                  ? "active active-pro"
                  : activeRoute(prop.layout + prop.path)
              }
              key={key}
            >
              <NavLink
                to={prop.layout + prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </NavLink>
            </li>
          );
        }
        return null;
      })}
    </Nav>
  </div>
</div> : <p>None</p>
  return user ? content : <Redirect to="/auth/login" />;
}

export default Sidebar;
