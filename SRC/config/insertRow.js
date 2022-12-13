const connection = require("./db.js");
const mysql = require("mysql");

function emptytoNull(data) {
  if (data == "") {
    data = null;
  }
  return data;
}

function insertRow(data, table) {
  let insertQuery = "";
  let query = null;
  if (table == "Division") {
    insertQuery = "INSERT INTO ?? (??,??) VALUES (?,?)";
    query = mysql.format(insertQuery, [
      "Division",
      "div_name",
      "conf_name",
      data.div_name,
      data.conf_name,
    ]);
  } else if (table == "Team") {
    insertQuery =
      "INSERT INTO ?? (??,??,??,??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    query = mysql.format(insertQuery, [
      "Team",
      "team_abbrev",
      "team_city",
      "div_name",
      "games_won",
      "games_lost",
      "games_tied",
      "points_for",
      "rush_yards",
      "pass_yards",
      "total_yards",
      "points_against",
      "rush_yards_against",
      "pass_yards_against",
      "total_yards_against",
      data.team_abbrev,
      data.team_city,
      data.div_name,
      data.games_won,
      data.games_lost,
      data.games_tied,
      data.points_for,
      data.rush_yards,
      data.pass_yards,
      data.total_yards,
      data.points_against,
      data.rush_yards_against,
      data.pass_yards_against,
      data.total_yards_against,
    ]);
  } else if (table == "Game") {
    insertQuery =
      "INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)";
    query = mysql.format(insertQuery, [
      "Game",
      "game_id",
      "game_day",
      "game_time",
      "away_team",
      "away_score",
      "home_team",
      "home_score",
      data.game_id,
      data.game_day,
      data.game_time,
      data.away_team,
      emptytoNull(data.away_score),
      data.home_team,
      emptytoNull(data.home_score),
    ]);
  } else if (table == "TeamAbbreviation") {
    insertQuery = "INSERT INTO ?? (??,??) VALUES (?,?)";
    query = mysql.format(insertQuery, [
      "TeamAbbreviation",
      "team_abbrev",
      "team_name",
      data.team_abbrev,
      data.team_name,
    ]);
  } else if (table == "DefensiveFootballPlayer") {
    insertQuery =
      "INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)";
    query = mysql.format(insertQuery, [
      "DefensiveFootballPlayer",
      "pf_name",
      "pl_name",
      "team_name",
      "def_int",
      "def_td",
      "def_tackles",
      "def_sacks",
      data.pf_name,
      data.pl_name,
      data.team_name,
      data.def_int,
      data.def_td,
      data.def_tackles,
      data.def_sacks,
    ]);
  } else if (table == "OffensiveFootballPlayer") {
    insertQuery =
      "INSERT INTO ?? (??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    query = mysql.format(insertQuery, [
      "OffensiveFootballPlayer",
      "pf_name",
      "pl_name",
      "team_name",
      "pass_att",
      "pass_comp",
      "comp_pct",
      "pass_yds",
      "pass_ypg",
      "pass_td",
      "pass_int",
      "rush_att",
      "rush_yds",
      "rush_avg",
      "rush_ypg",
      "rush_td",
      "rec",
      "rec_yds",
      "rec_avg",
      "rec_ypg",
      "rec_td",
      "tar",
      "yac",
      data.pf_name,
      data.pl_name,
      data.team_name,
      data.pass_att,
      data.pass_comp,
      data.comp_pct,
      data.pass_yds,
      data.pass_ypg,
      data.pass_td,
      data.pass_int,
      data.rush_att,
      data.rush_yds,
      data.rush_avg,
      data.rush_ypg,
      data.rush_td,
      data.rec,
      data.rec_yds,
      data.rec_avg,
      data.rec_ypg,
      data.rec_td,
      data.tar,
      data.yac,
    ]);
  } else if (table == "Kicker") {
    insertQuery =
      "INSERT INTO ?? (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)";
    query = mysql.format(insertQuery, [
      "Kicker",
      "pf_name",
      "pl_name",
      "team_name",
      "xp_made",
      "xp_att",
      "fg_made",
      "fg_att",
      data.pf_name,
      data.pl_name,
      data.team_name,
      data.xp_made,
      data.xp_att,
      data.fg_made,
      data.fg_att,
    ]);
  } else {
    //do nothing
  }
  connection.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

module.exports = insertRow;
