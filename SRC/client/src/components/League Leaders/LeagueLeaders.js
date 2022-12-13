import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import "./LeagueLeaders.css";
import axios from "axios";

export default function LeagueLeaders() {
  const showPass = () => {
    const u = document.getElementById("pass_ydsList");
    while (u.firstChild) {
      u.removeChild(u.firstChild);
    }
    try {
      axios.get("/off/pass_yds").then((res) => {
        let list = res.data;
        console.log(list);
        let i = 0;
        for (i in list) {
          let l = document.createElement("li");
          let l1 = document.createElement("li");
          let l3 = document.createElement("br");

          let fname = document.createTextNode(
            "Player: " + res.data[i].pf_name + " "
          );
          let lname = document.createTextNode(res.data[i].pl_name);
          let yds = document.createTextNode(
            " Passing Yards: " + res.data[i].pass_yds
          );
          l.appendChild(fname);
          l.appendChild(lname);
          l.appendChild(l3)
          l.appendChild(yds);
          u.appendChild(l);
         // u.appendChild(l1);
          //u.appendChild(l3);
        }
      });
    } catch (err) {}
  };
  const showRush = () => {
    const u = document.getElementById("rush_ydsList");
    while (u.firstChild) {
      u.removeChild(u.firstChild);
    }
    try {
      axios.get("/off/rush_yds").then((res) => {
        let list = res.data;
        console.log(list);
        let i = 0;
        for (i in list) {
          let l = document.createElement("li");
          let l1 = document.createElement("li");
          let l3 = document.createElement("br");

          let fname = document.createTextNode(
            "Player: " + res.data[i].pf_name + " "
          );
          let lname = document.createTextNode(res.data[i].pl_name);
          let yds = document.createTextNode(
            " Rushing Yards: " + res.data[i].rush_yds
          );
          l.appendChild(fname);
          l.appendChild(lname);
          l.appendChild(l3)
          l.appendChild(yds);
          u.appendChild(l);
         // u.appendChild(l1);
          //u.appendChild(l3);
        }
      });
    } catch (err) {}
  };
  const showRec = () => {
    const u = document.getElementById("rec_ydsList");
    while (u.firstChild) {
      u.removeChild(u.firstChild);
    }
    try {
      axios.get("/off/rec_yds").then((res) => {
        let list = res.data;
        console.log(list);
        let i = 0;
        for (i in list) {
          let l = document.createElement("li");
          let l1 = document.createElement("li");
          let l3 = document.createElement("br");

          let fname = document.createTextNode(
            "Player: " + res.data[i].pf_name + " "
          );
          let lname = document.createTextNode(res.data[i].pl_name);
          let yds = document.createTextNode(
            " Recieving Yards: " + res.data[i].rec_yds
          );
          l.appendChild(fname);
          l.appendChild(lname);
          l.appendChild(l3)
          l.appendChild(yds);
          u.appendChild(l);
         // u.appendChild(l1);
          //u.appendChild(l3);
        }
      });
    } catch (err) {}
  };

  return (
    <>
      <Navigation />
      <div id="lab">
        <label id="label">Offensive Player League Leaders</label>
      </div>
      <div id="main">
        <div id="pass">
          <button id="pass_yds" onClick={showPass}>
            Show Leading Passing Yards
          </button>
          <div class = "vertical"></div>
          <ol className="list" id="pass_ydsList"></ol>
        </div>
        <div id="rec">
          <button id="rec_yds" onClick={showRec}>
            Show Leading Recieving Yards
          </button>
          <ol className="list" id="rec_ydsList"></ol>
        </div>
        <div class = "vertical"></div>
        <div id="rush">
          <button id="rush_yds" onClick={showRush}>
            Show Leading Rushing Yards
          </button>
          <ol className="list" id="rush_ydsList"></ol>
        </div>
      </div>
    </>
  );
}
