import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import PlayerSearch from "./Player Search/PlayerSearch";
import TeamRosters from "./Team Rosters/teamRosters";
import Standings from "./Standings/Standings";
import PlayerComparison from "./PlayerComparison/PlayerComparison";
import LeagueLeaders from "./League Leaders/LeagueLeaders.js";
import History from "./History/History";
import Logout from "./Logout/Logout";
import Favorites from "./Favorites/Favorites";

function App() {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vh" }}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login></Login>} />
            <Route exact path="/signup" element={<Signup></Signup>} />
            <Route exact path="/homepage" element={<Homepage></Homepage>} />
            <Route exact path="/standings" element={<Standings></Standings>} />
            <Route
              exact
              path="/player-comparison"
              element={<PlayerComparison></PlayerComparison>}
            />
            <Route exact path="/history" element={<History></History>} />
            <Route exact path="/logout" element={<Logout></Logout>} />
            <Route
              exact
              path="/player-search"
              element={<PlayerSearch></PlayerSearch>}
            />
            <Route
              exact
              path="/teamRosters"
              element={<TeamRosters></TeamRosters>}
            />
            <Route
              exact
              path="/league-leaders"
              element={<LeagueLeaders></LeagueLeaders>}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
