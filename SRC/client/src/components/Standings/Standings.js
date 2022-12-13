import React from "react";
import { useEffect, useState } from "react";
import "./Standings.css";
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";

export default function Standings() {
  // Holds upcoming game info
  const [stand, setstand] = useState([]);
  useEffect(() => {
    getLeauge();
    getConfrence();
    getDivison();
  }, []);

  //Gets all games for selected week
  const getLeauge = async (id) => {
    let result = await fetch(`/standings/leauge`);
    result = await result.json();
    setstand(result);
  };
  const getConfrence = async (id) => {
    let result = await fetch(`/standings/confrence/${id}`);
    result = await result.json();
    setstand(result);
  };
  const getDivison = async (id) => {
    let result = await fetch(`/standings/division/${id}`);
    result = await result.json();
    setstand(result);
  };

  //Check selection of the drop down to organize
  function showList() {
    const choice = document.getElementById("list-games").value;
    if (choice == "Select") {
        //Do nothing
    } else if (choice == "Leauge") {
      getLeauge();
    } else if (choice == "AFC" || choice == "NFC") {
      getConfrence(choice);
    } else {
      getDivison(choice);
    }
  }

  return (
    <body>
      <div>
        <Navigation />

        <center>
          <br />
          <span style={{ fontSize: "50px", fontFamily: "Impact" }}>
            Standings
          </span>
          <br />
          <br />

          <span
            style={{
              fontSize: "18px",
              fontFamily: "Copperplate",
              marginLeft: "80px",
            }}
          >
            Organize by:
            <select
              id="list-games"
              onChange={() => {
                showList();
              }}
            >
              <option value="Select">Select</option>
              <option value="Leauge">Leauge</option>
              <option value="AFC">AFC</option>
              <option value="NFC">NFC</option>
              <option value="NFC North">NFC North</option>
              <option value="NFC East">NFC East</option>
              <option value="NFC South">NFC South</option>
              <option value="NFC West">NFC West</option>
              <option value="AFC North">AFC North</option>
              <option value="AFC East">AFC East</option>
              <option value="AFC South">AFC South</option>
              <option value="AFC West">AFC West</option>
            </select>
          </span>
        </center>
        <br />
        <table id="t2">
          <tbody>
            <tr>
              <th>Abrv</th>
              <th>City</th>
              <th>Team</th>
              <th>Record</th>
            </tr>

            {stand.map((item) => (
              <tr>
                <td>{item.team_abbrev}</td>
                <td>{item.team_city}</td>
                <td>{item.team_name}</td>
                <td>
                  {item.games_won}-{item.games_lost}-{item.games_tied}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br></br>
    </body>
  );
}
