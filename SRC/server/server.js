const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const dbConfig = require("../config/db.config");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

app.use(
  cors({
    origin: ["http://localhost:8000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "3316aztdcb",
    resave: false,
    saveUninitialized: false,
    cookie: {
      //means that the cookie expires after 24 hours, so sessions can be maintained for that long
      expires: 60 * 60 * 24 * 1000,
    },
  })
);

app.get("/logOutUser", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("userId").send("cleared cookie");
  });
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.get("/login/:email", (req, res) => {
//   let email = req.params.email;
//   //let password = req.body.password;
//   let password = "password";
//   let query = `SELECT * FROM User WHERE email = "${email}" AND password="${password}"`;
//   connection.query(query, (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//     res.send(data);
//   });
// });

app.get("/current/:week", (req, res) => {
  let week = req.params.week;
  let query = `SELECT g.game_id, g.game_day, g.game_time, g.away_team, g.home_team, g.away_score, g.home_score, t.games_won AS home_wins, t.games_lost AS home_losses, t.games_tied AS home_ties,
  tt.games_won AS away_wins, tt.games_lost AS away_losses, tt.games_tied AS away_ties
  FROM (Game g JOIN Team t ON g.home_team = t.team_abbrev JOIN Team tt ON g.away_team = tt.team_abbrev) 
  WHERE g.game_id LIKE '%2022_${week}%'`;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});

app.get("/predict/:week/:home_team", (req, res) => {
  let week = req.params.week;
  let home_team = req.params.home_team;
  let query = `SELECT g.game_id, g.game_day, g.game_time, 
  g.home_team, 
  h.points_for / (h.games_won + h.games_lost + h.games_tied) AS home_pf, 
  h.points_against / (h.games_won + h.games_lost + h.games_tied)AS home_pa,
  h.pass_yards / (h.games_won + h.games_lost + h.games_tied)AS home_passf,
  h.pass_yards_against / (h.games_won + h.games_lost + h.games_tied) AS home_passa,
  h.rush_yards / (h.games_won + h.games_lost + h.games_tied) AS home_rushf,
  h.rush_yards_against / (h.games_won + h.games_lost + h.games_tied) AS home_rusha,
  g.away_team, 
  a.points_for / (a.games_won + a.games_lost + a.games_tied) AS away_pf, 
  a.points_against / (a.games_won + a.games_lost + a.games_tied) AS away_pa,
  a.pass_yards / (a.games_won + a.games_lost + a.games_tied) AS away_passf,
  a.pass_yards_against  / (a.games_won + a.games_lost + a.games_tied)AS away_passa,
  a.rush_yards  / (a.games_won + a.games_lost + a.games_tied)AS away_rushf,
  a.rush_yards_against  / (a.games_won + a.games_lost + a.games_tied)AS away_rusha
  FROM (Game g JOIN Team h ON g.home_team = h.team_abbrev JOIN Team a ON g.away_team = a.team_abbrev) 
  WHERE g.game_id LIKE '%2022_${week}%' AND home_team LIKE '${home_team}';`;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});

app.get("/predict/avg", (req, res) => {
  //for this to work you must have LeaugeAverages view
  let query = `SELECT * FROM LeaugeAverages`;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});

app.get("/past/:year/:team", (req, res) => {
  let year = req.params.year;
  let team = req.params.team;
  let query = `SELECT g.game_id, g.game_day, g.game_time, g.away_team, g.home_team, g.away_score, g.home_score
  FROM Game g WHERE g.game_id LIKE '%${team}%' AND g.game_id LIKE '%${year}%' `;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});

app.get("/roster/:t_name", (req, res) => {
  let t_name = req.params.t_name;

  let query = `SELECT pf_name, pl_name FROM (
    (SELECT team_name, pf_name, pl_name
      FROM OffensiveFootballPlayer AS offPlayer) 
        UNION
    (SELECT team_name, pf_name, pl_name 
      FROM DefensiveFootballPlayer AS defPlayer)
        UNION

        (SELECT team_name, pf_name, pl_name FROM Kicker AS kickPlayer)) AS teamRoster WHERE team_name= "${t_name}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});
app.get("/divs/:d_name", (req, res) => {
  let d_name = req.params.d_name;

  let query = `SELECT team_abbrev FROM Team WHERE div_name = "${d_name}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});

//Geting standings for whole leauge
app.get("/standings/leauge", (req, res) => {
  let query = `SELECT t.team_abbrev, t.team_city, ta.team_name, d.div_name, d.conf_name, t.games_won, t.games_lost, t.games_tied 
  FROM (Team t JOIN Division d ON t.div_name = d.div_name JOIN TeamAbbreviation ta ON ta.team_abbrev = t.team_abbrev) ORDER BY t.games_won DESC`;
  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});
//Getting standing for confrence
app.get("/standings/confrence/:cnf", (req, res) => {
  let query = `SELECT t.team_abbrev, t.team_city, ta.team_name, d.div_name, d.conf_name, t.games_won, t.games_lost, t.games_tied 
  FROM (Team t JOIN Division d ON t.div_name = d.div_name JOIN TeamAbbreviation ta ON ta.team_abbrev = t.team_abbrev) WHERE d.conf_name = "${req.params.cnf}" ORDER BY t.games_won DESC`;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});
//Getting standing for division
app.get("/standings/division/:div", (req, res) => {
  let query = `SELECT t.team_abbrev, t.team_city, ta.team_name, d.div_name, d.conf_name, t.games_won, t.games_lost, t.games_tied 
  FROM (Team t JOIN Division d ON t.div_name = d.div_name JOIN TeamAbbreviation ta ON ta.team_abbrev = t.team_abbrev)  WHERE d.div_name = "${req.params.div}" ORDER BY t.games_won DESC`;

  connection.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    }
    res.send(data);
  });
});

app.get("/off/stats/:player", (req, res) => {
  let player = req.params.player;
  let query = `SELECT * FROM OffensiveFootballPlayer WHERE pl_name LIKE "%${player}%" OR pf_name LIKE "%${player}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

app.get("/def/stats/:player", (req, res) => {
  let player = req.params.player;
  let query = `SELECT * FROM DefensiveFootballPlayer WHERE pl_name LIKE "%${player}%" OR pf_name LIKE "%${player}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.get("/kick/stats/:player", (req, res) => {
  let player = req.params.player;
  let query = `SELECT * FROM Kicker WHERE pl_name LIKE "%${player}%" OR pf_name LIKE "%${player}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.get("/team/stats/:tName", (req, res) => {
  let tName = req.params.tName;
  let query = `SELECT * FROM Team INNER JOIN TeamAbbreviation ON Team.team_abbrev = TeamAbbreviation.team_abbrev WHERE team_name LIKE "%${tName}%" OR team_city LIKE "%${tName}%" OR Team.team_abbrev LIKE "%${tName}%"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

// get all player data and team data
app.get("/playerAndTeam/:player", (req, res) => {
  let player = req.params.player;
  let query = `SELECT o.pf_name, o.pl_name, o.team_name, o.pass_yds, o.rec_yds,
  o.rush_yds, (o.pass_td + o.rec_td + o.rush_td) AS td, t.points_for, t.pass_yards, t.pass_yards AS rec_yards, t.rush_yards
  FROM (OffensiveFootballPlayer o JOIN Team t ON o.team_name = t.team_abbrev) WHERE pf_name LIKE "%${player}%" OR pl_name LIKE "%${player}%"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

//adds the team to the list of user's favorites
app.post("/:team/:username", (req, res) => {
  const username = req.body.username;
  const team = req.body.team;

  let query = `INSERT INTO Favourites VALUES ("${username}", "${team}") `;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});

//grabs the favorited teams based on the user name
app.get("/favorites/:username", (req, res) => {
  const username = req.params.username;
  console.log(username);

  let query = `SELECT fav_team_name FROM Favourites WHERE username = "${username}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});

//grabs all the team names from the team table
app.get("/teams", (req, res) => {
  let query = `SELECT team_abbrev FROM Team`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.post("/unfavorite/:user/:team", (req, res) => {
  const user = req.params.user;
  const team = req.params.team;
  let query = `DELETE FROM Favourites WHERE username="${user}" AND fav_team_name="${team}"`;
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);

  let query = `SELECT * FROM User WHERE username = "${username}" AND password = "${password}"`;

  connection.query(query, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    //there is someone in the db with that username/password combination
    if (result.length > 0) {
      req.session.user = result;
      console.log(req.session.user);
      res.json({ auth: true, result: result });
    } else {
      //happens if no user exists
      res.json({ auth: false, message: "No user exists" });
    }
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const uf_Name = req.body.uf_Name;
  const ul_Name = req.body.ul_Name;
  const email = req.body.email;
  const password = req.body.password;

  let query = `INSERT INTO User VALUES ("${username}", "${uf_Name}", "${ul_Name}", "${email}", "${password}")`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});
app.get("/off/pass_yds", (req, res) => {
  let query = `SELECT pf_name, pl_name, pass_yds FROM OffensiveFootballPlayer ORDER BY pass_yds DESC LIMIT 15`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});
app.get("/off/rec_yds", (req, res) => {
  let query = `SELECT pf_name, pl_name, rec_yds FROM OffensiveFootballPlayer ORDER BY rec_yds DESC LIMIT 15`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});
app.get("/off/rush_yds", (req, res) => {
  let query = `SELECT pf_name, pl_name, rush_yds FROM OffensiveFootballPlayer ORDER BY rush_yds DESC LIMIT 15`;
  connection.query(query, (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
