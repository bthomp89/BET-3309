import { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import axios from "axios";
import Navigation from "../Navigation/Navigation";

import React from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [firstNameReg, setFirstName] = useState(null);
  const [lastNameReg, setLastName] = useState(null);
  const [emailReg, setEmail] = useState(null);
  const [passwordReg, setPasswordReg] = useState(null);

  //needed to connect FE to BE with sessions (doesn't work without this)
  axios.defaults.withCredentials = true;

  const handleInputChange = (e) => {
    //you get the id and value entered in the input box
    const { id, value } = e.target;
    //if id is firstName, you set the setFirstName to the value in the input box (so on for the other ones)
    if (id === "usernameReg") {
      setUsername(value);
    }
    if (id === "firstNameReg") {
      setFirstName(value);
    }
    if (id === "lastNameReg") {
      setLastName(value);
    }
    if (id === "emailReg") {
      setEmail(value);
    }
    if (id === "passwordReg") {
      setPasswordReg(value);
    }
    // if (id === "confirmPassword") {
    //   setConfirmPassword(value);
    // }
  };

  //inserts the user into the database upon registration
  const handleRegisterBtn = () => {
    fetch(`/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-length": 2,
      },
      //{
      body: JSON.stringify({
        username: username,
        uf_Name: firstNameReg,
        ul_Name: lastNameReg,
        email: emailReg,
        password: passwordReg,
      }),
    }).then(alert(`The user has been successfully added`));
  };

  return (
    <div>
      <Navigation />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>First name</label>
              <input
                type="text"
                id="firstNameReg"
                className="form-control mt-1"
                placeholder="Enter first name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last name</label>
              <input
                type="text"
                id="lastNameReg"
                className="form-control mt-1"
                placeholder="Enter last name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                id="usernameReg"
                className="form-control mt-1"
                placeholder="Enter username"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                id="emailReg"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                id="passwordReg"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                className="btn btn-primary"
                onClick={() => handleRegisterBtn()}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
