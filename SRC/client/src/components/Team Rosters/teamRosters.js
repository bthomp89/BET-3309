import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import "./teamRosters.css";

function TeamRosters() {
  const getNames = async () => {
    const l = document.getElementById("names");
    const team = document.getElementById("teams").value;

    let players = await fetch(`/roster/${team}`);
    players = await players.json();

    let playersNm = [];
    let i = 0;
    for (i in players) {
      playersNm[i] = players[i].pf_name.concat(" " + players[i].pl_name);
    }
    while (l.hasChildNodes()) {
      l.removeChild(l.firstChild);
    }
    for (i in playersNm) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(playersNm[i]));
      l.appendChild(li);
    }
  };

  const searchDivision = async () => {
    const div = document.getElementById("divisions").value;

    if (div != "n/a") {
      let teams = await fetch(`/divs/${div}`);
      teams = await teams.json();
      let i = 0;

      console.log(teams);
      const l = document.getElementById("teams");
      let a = 0;
      for (a in l.options) {
        l.remove(0);
      }
      let b = 0;
      for (b in teams) {
        dynamicTeam(teams[b].team_abbrev);
      }
    }
  };

  const dynamicTeam = (team) => {
    const l = document.getElementById("teams");
    let node = document.createElement("option");
    node.appendChild(document.createTextNode(team));
    l.appendChild(node);
  };

  return (
    <>
      <Navigation />

      <div id="App">
        <label id="label">Team Rosters</label>
        <div id="one">
          <select id="divisions" onChange={searchDivision}>
            <option value="n/a">--Select A Division--</option>
            <option value="AFC East">AFC East</option>
            <option value="AFC North">AFC North</option>
            <option value="AFC South">AFC South</option>
            <option value="AFC West">AFC West</option>
            <option value="NFC South">NFC South</option>
            <option value="NFC East">NFC East</option>
            <option value="NFC North">NFC North</option>
            <option value="NFC West">NFC West</option>
          </select>
        </div>
        <div id="two">
          <select id="teams">
            <option value="">--Select A Team--</option>
          </select>
        </div>
        <button id="btn1" onClick={getNames}>
          Search Roster
        </button>

        <ul className="names" id="names"></ul>
      </div>
    </>
  );
}
export default TeamRosters;
