import React from "react";
import { useEffect, useState } from "react";
import "./History.css";
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

export default function History() {
  // Holds upcoming game info
  const [games, setgames] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getGames();
    if (location.state !== null) {
      document.getElementById("list-teams").value = location.state.teamName;
      document.getElementById("list-years").value = "2022";
      getGames("2022", location.state.teamName);
    }
  }, [location]);

  //Gets all games for selected week
  const getGames = async (year, team) => {
    let result = await fetch(`/past/${year}/${team}`);
    result = await result.json();
    setgames(result);
  };

  //Check selection of the week and then call get games to display
  function showGames() {
    const team = document.getElementById("list-teams").value;
    const year = document.getElementById("list-years").value;

    getGames(year, team);
  }

  return (
    <div>
      <Navigation />
      <div>
        <center>
          <br />
          <br />
          <span style={{ fontSize: "50px", fontFamily: "Impact" }}>
            History
          </span>
        </center>
        <Favorites />
        <br />
        <span
          style={{
            fontSize: "20px",
            fontFamily: "Copperplate",
            marginLeft: "80px",
          }}
        >
          Team:
          <select
            style={{ marginRight: "25px" }}
            id="list-teams"
            onChange={() => {
                showGames();
              }}
          >
            <option value="TEAM">Team</option>
            <option value="ARI">ARI</option>
            <option value="ATL">ATL</option>
            <option value="BAL">BAL</option>
            <option value="BUF">BUF</option>
            <option value="CAR">CAR</option>
            <option value="CHI">CHI</option>
            <option value="CIN">CIN</option>
            <option value="CLE">CLE</option>
            <option value="DAL">DAL</option>
            <option value="DEN">DEN</option>
            <option value="DET">DET</option>
            <option value="GB">GB</option>
            <option value="HOU">HOU</option>
            <option value="IND">IND</option>
            <option value="JAX">JAX</option>
            <option value="KC">KC</option>
            <option value="LA">LA</option>
            <option value="LAC">LAC</option>
            <option value="LV">LV</option>
            <option value="MIA">MIA</option>
            <option value="MIN">MIN</option>
            <option value="NE">NE</option>
            <option value="NO">NO</option>
            <option value="NYG">NYG</option>
            <option value="NYJ">NYJ</option>
            <option value="PHI">PHI</option>
            <option value="PIT">PIT</option>
            <option value="SEA">SEA</option>
            <option value="SF">SF</option>
            <option value="TB">TB</option>
            <option value="TEN">TEN</option>
          </select>
          Year:
          <select
            id="list-years"
            onChange={() => {
              showGames();
            }}
          >
            <option value="Year">Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </span>
      </div>
      <br></br>
      <table id="t1">
        <tbody>
          <tr>
            <th>Home Team</th>
            <th>Home Score</th>
            <th>Away Team</th>
            <th>Away Score</th>
            <th>Game Day</th>
            <th>Game Time</th>
          </tr>

          {games.map((item) => (
            <tr>
              <td>{item.home_team}</td>
              <td>{item.home_score}</td>
              <td>{item.away_team}</td>

              <td>{item.away_score}</td>
              <td>{item.game_day.slice(0, 10)}</td>
              <td>{item.game_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
}
