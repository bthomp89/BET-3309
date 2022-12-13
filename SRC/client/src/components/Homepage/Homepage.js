import React from "react";
import { useEffect, useState } from "react";
import "./Homepage.css";
import Navigation from "../Navigation/Navigation";
import Favorites from "../Favorites/Favorites";
import { Button } from "react-bootstrap";

export default function Homepage() {
  // Holds upcoming game info
  const [games, setgames] = useState([]);
  useEffect(() => {
    getGames();
  }, []);

  //Gets all games for selected week
  const getGames = async (id) => {
    let result = await fetch(`/current/${id}`);
    result = await result.json();
    setgames(result);
    console.log(id);
  };

  //Check selection of the week and then call get games to display
  function showGames() {
    const week = document.getElementById("list-games").value;
    if ("Week #" != week) {
      getGames(week);
    }
  }

  //needs to be called with week and home_team taken from the row of the button clicked (will probably need game_id in that table to do this)
  async function predictGame(hTeam) {
    let week = document.getElementById("list-games").value;
    let home_team = hTeam;
    let home_spread = 2.5;
    let away_spread = 0;
    let game_stats = await fetch(`/predict/${week}/${home_team}`);
    game_stats = await game_stats.json();
    let avg_stats = await fetch(`/predict/avg`);
    avg_stats = await avg_stats.json();

    //stat brackets
    let avgPF = avg_stats[0].avg_pf;
    let greatPF = avgPF + avgPF * 0.25;
    let goodPF = avgPF + avgPF * 0.075;
    let ngreatPF = avgPF - avgPF * 0.25;
    let ngoodPF = avgPF - avgPF * 0.075;

    let avgPA = avg_stats[0].avg_pa;
    let greatPA = avgPA - avgPA * 0.25;
    let goodPA = avgPA - avgPA * 0.075;
    let ngreatPA = avgPA + avgPA * 0.25;
    let ngoodPA = avgPA + avgPA * 0.075;

    let avgPYF = avg_stats[0].avg_passf;
    let greatPYF = avgPYF + avgPYF * 0.2;
    let goodPYF = avgPYF + avgPYF * 0.05;
    let ngreatPYF = avgPYF - avgPYF * 0.2;
    let ngoodPYF = avgPYF - avgPYF * 0.05;

    let avgPYA = avg_stats[0].avg_passa;
    let greatPYA = avgPYA - avgPYA * 0.2;
    let goodPYA = avgPYA - avgPYA * 0.05;
    let ngreatPYA = avgPYA + avgPYA * 0.2;
    let ngoodPYA = avgPYA + avgPYA * 0.05;

    let avgRYF = avg_stats[0].avg_rushf;
    let greatRYF = avgRYF + avgRYF * 0.2;
    let goodRYF = avgRYF + avgRYF * 0.05;
    let ngreatRYF = avgRYF - avgRYF * 0.2;
    let ngoodRYF = avgRYF - avgRYF * 0.05;

    let avgRYA = avg_stats[0].avg_rusha;
    let greatRYA = avgRYA - avgRYA * 0.2;
    let goodRYA = avgRYA - avgRYA * 0.05;
    let ngreatRYA = avgRYA + avgRYA * 0.2;
    let ngoodRYA = avgRYA + avgRYA * 0.05;

    //home PF
    if (game_stats[0].home_pf > greatPF) {
      home_spread += 3;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pf > goodPF) {
      home_spread += 2;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pf < ngreatPF) {
      home_spread -= 3;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pf < ngoodPF) {
      home_spread -= 2;
      console.log("HS" + home_spread);
    }
    //away PF
    if (game_stats[0].away_pf > greatPF) {
      away_spread += 3;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pf > goodPF) {
      away_spread += 2;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pf < ngreatPF) {
      away_spread -= 3;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pf < ngoodPF) {
      away_spread -= 2;
      console.log("AS" + away_spread);
    }

    //home PA
    if (game_stats[0].home_pa < greatPA) {
      home_spread += 3;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pa < goodPA) {
      home_spread += 2;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pa > ngreatPA) {
      home_spread -= 3;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_pa > ngoodPA) {
      home_spread -= 2;
      console.log("HS" + home_spread);
    }
    //away PA
    if (game_stats[0].away_pa < greatPA) {
      away_spread += 3;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pa < goodPA) {
      away_spread += 2;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pa > ngreatPA) {
      away_spread -= 3;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_pa > ngoodPA) {
      away_spread -= 2;
      console.log("AS" + away_spread);
    }
    //home PYF
    if (game_stats[0].home_passf > greatPYF) {
      home_spread += 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passf > goodPYF) {
      home_spread += 1;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passf < ngreatPYF) {
      home_spread -= 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passf < ngoodPYF) {
      home_spread -= 1;
      console.log("HS" + home_spread);
    }
    //away PYF
    if (game_stats[0].away_passf > greatPYF) {
      away_spread += 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passf > goodPYF) {
      away_spread += 1;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passf < ngreatPYF) {
      away_spread -= 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passf < ngoodPYF) {
      away_spread -= 1;
      console.log("AS" + away_spread);
    }
    //home PYA
    if (game_stats[0].home_passa < greatPYA) {
      home_spread += 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passa < goodPYA) {
      home_spread += 1;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passa > ngreatPYA) {
      home_spread -= 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_passa > ngoodPYA) {
      home_spread -= 1;
      console.log("HS" + home_spread);
    }

    //away PYA
    if (game_stats[0].away_passa < greatPYA) {
      away_spread += 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passa < goodPYA) {
      away_spread += 1;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passa > ngreatPYA) {
      away_spread -= 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_passa > ngoodPYA) {
      away_spread -= 1;
      console.log("AS" + away_spread);
    }

    //home RYF
    if (game_stats[0].home_rushf > greatRYF) {
      home_spread += 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rushf > goodRYF) {
      home_spread += 1;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rushf < ngreatRYF) {
      home_spread -= 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rushf < ngoodRYF) {
      home_spread -= 1;
      console.log("HS" + home_spread);
    }

    //away RYF
    if (game_stats[0].away_rushf > greatRYF) {
      away_spread += 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rushf > goodRYF) {
      away_spread += 1;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rushf < ngreatRYF) {
      away_spread -= 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rushf < ngoodRYF) {
      away_spread -= 1;
      console.log("AS" + away_spread);
    }

    //home RYA
    if (game_stats[0].home_rusha < greatRYA) {
      home_spread += 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rusha < goodRYA) {
      home_spread += 1;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rusha > ngreatRYA) {
      home_spread -= 1.5;
      console.log("HS" + home_spread);
    } else if (game_stats[0].home_rusha > ngoodRYA) {
      home_spread -= 1;
      console.log("HS" + home_spread);
    }

    //away RYA
    if (game_stats[0].away_rusha < greatRYA) {
      away_spread += 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rusha < goodRYA) {
      away_spread += 1;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rusha > ngreatRYA) {
      away_spread -= 1.5;
      console.log("AS" + away_spread);
    } else if (game_stats[0].away_rusha > ngoodRYA) {
      away_spread -= 1;
      console.log("AS" + away_spread);
    }

    let prediction = home_spread - away_spread;
    if (prediction > 0) {
      document
        .getElementById("predictionList")
        .appendChild(
          document.createTextNode(
            "OUR PREDICTION: " +
              home_team +
              " BEATS " +
              game_stats[0].away_team +
              " BY " +
              prediction +
              " POINTS"
          )
        );
    } else if (prediction < 0) {
      prediction = prediction * -1;
      document
        .getElementById("predictionList")
        .appendChild(
          document.createTextNode(
            "OUR PREDICTION: " +
              home_team +
              " LOSES TO " +
              game_stats[0].away_team +
              " BY " +
              prediction +
              " POINTS"
          )
        );
    } else {
      document.getElementById('predictionList').appendChild(document.createTextNode(
        "OUR PREDICTION: THIS GAME COULD GO ETHIER WAY"
      ));
    }

    document
      .getElementById("predictionList")
      .appendChild(document.createElement("br"));

    var closeBtn = document.createElement("button");
    closeBtn.style.height = "40px";
    closeBtn.style.width = "210px";
    closeBtn.innerHTML = "Close Prediction";
    closeBtn.id = "predCloseBtn";
    document.getElementById("predictionList").appendChild(closeBtn);
    closeBtn.addEventListener("click", () => {
      var pred = document.getElementById("predictionList");
      while (pred.firstChild) {
        pred.removeChild(pred.firstChild);
      }
    });
  }

  function closePrediction() {
    var predictList = document.getElementById("predictionList");
    while (predictList.firstChild) {
      predictList.removeChild(predictList.firstChild);
    }
  }

  return (
    <div>
      <Navigation />
      <div>
        <center>
          <br />
          <span style={{ fontSize: "60px", fontFamily: "Impact" }}>
            BET 3309
          </span>
          <br />
          <span style={{ fontSize: "25px", fontFamily: "Copperplate" }}>
            An Application To Get You Rich!
          </span>
        </center>
        <br />
        <Favorites />
        <br />
        <center>
          <ol id="predictionList"></ol>
        </center>
        <span
          style={{
            fontSize: "20px",
            fontFamily: "Copperplate",
            marginLeft: "80px",
          }}
        >
          Games:
          <select
            id="list-games"
            onChange={() => {
              showGames();
            }}
          >
            <option value="Week#">Week #</option>
            <option value="01">Week 1</option>
            <option value="02">Week 2</option>
            <option value="03">Week 3</option>
            <option value="04">Week 4</option>
            <option value="05">Week 5</option>
            <option value="06">Week 6</option>
            <option value="07">Week 7</option>
            <option value="08">Week 8</option>
            <option value="09">Week 9</option>
            <option value="10">Week 10</option>
            <option value="11">Week 11</option>
            <option value="12">Week 12</option>
            <option value="13">Week 13</option>
            <option value="14">Week 14</option>
            <option value="15">Week 15</option>
            <option value="16">Week 16</option>
            <option value="17">Week 17</option>
            <option value="18">Week 18</option>
          </select>
        </span>
      </div>
      <table id="t1">
        <tbody>
          <tr>
            <th>Home Team</th>
            <th>Record</th>
            <th>Home Score</th>
            <th>Away Team</th>
            <th>Record</th>
            <th>Away Score</th>
            <th>Game Day</th>
            <th>Game Time</th>
            <th>Prediction</th>
          </tr>

          {games.map((item) => (
            <tr>
              <td>{item.home_team}</td>
              <td>
                {item.home_wins}-{item.home_losses}-{item.home_ties}
              </td>
              <td>{item.home_score}</td>
              <td>{item.away_team}</td>
              <td>
                {item.away_wins}-{item.away_losses}-{item.away_ties}
              </td>
              <td>{item.away_score}</td>
              <td>{item.game_day.slice(0, 10)}</td>
              <td>{item.game_time}</td>

              <td>
                <Button
                  className="btn btn-dark"
                  id="predictBtn"
                  onClick={() => {
                    closePrediction();
                    predictGame(item.home_team);
                  }}
                >
                  Predict
                </Button>
              </td>
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
