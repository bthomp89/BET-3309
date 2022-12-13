import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Navigation() {
  const [showNavElements, setLoggedInTrue] = useState(false);

  useEffect(() => {
    //we have two routes which is fine because this is a get request getting info on if the user is logged in or not
    axios.get("/login").then((response) => {
      console.log(response);
      //only if the status of logged in is true do we want to show the username
      if (response.data.loggedIn === true) {
        setLoggedInTrue(true);
      }
    });
  }, []);

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse>
        <Nav>
          {showNavElements === true && (
            <NavLink eventKey="1" as={Link} to="/homepage">
              Homepage
            </NavLink>
          )}
          {showNavElements === true && (
            <NavLink eventKey="2" as={Link} to="/player-search">
              Search
            </NavLink>
          )}
          {showNavElements === true && (
            <NavLink eventKey="3" as={Link} to="/teamRosters">
              Rosters
            </NavLink>
          )}
          {showNavElements === true && (
            <NavLink eventKey="4" as={Link} to="/standings">
              Standings
            </NavLink>
          )}{" "}
          {showNavElements === true && (
            <NavLink eventKey="5" as={Link} to="/player-comparison">
              Player Contribution
            </NavLink>
          )}{" "}
          {showNavElements === true && (
            <NavLink eventKey="6" as={Link} to="/history">
              History
            </NavLink>
          )}
          {showNavElements === true && (
            <NavLink eventKey="7" as={Link} to="/league-leaders">
              League Leaders
            </NavLink>
          )}
          {showNavElements !== true && (
            <NavLink eventKey="8" as={Link} to="/">
              Login
            </NavLink>
          )}
          {showNavElements !== true && (
            <NavLink eventKey="9" as={Link} to="/signup">
              Sign up
            </NavLink>
          )}
          {showNavElements === true && (
            <NavLink eventKey="10" as={Link} to="/logout">
              Log out
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
