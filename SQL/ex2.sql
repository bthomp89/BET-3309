CREATE TABLE User (
	username VARCHAR(100) NOT NULL,
	uf_Name VARCHAR(50) NOT NULL,
	ul_Name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	password VARCHAR(50) NOT NULL,
	PRIMARY KEY(username)
);

CREATE TABLE Division(
div_name VARCHAR (35) NOT NULL PRIMARY KEY,
conf_name VARCHAR(3) NOT NULL
);

CREATE TABLE Team (
	team_abbrev VARCHAR (3) NOT NULL PRIMARY KEY, 
	team_city VARCHAR (35) NOT NULL, 
	div_name VARCHAR (25),
	games_won INT, 
	games_lost INT,
	games_tied INT,
	points_for INT,
	rush_yards INT,
	pass_yards INT,
	total_yards INT,
	points_against INT,
	rush_yards_against INT,
	pass_yards_against INT,
	total_yards_against INT,
	user_favourites INT DEFAULT VALUE 0;
    FOREIGN KEY(div_name) REFERENCES Division(div_name)
);

CREATE TABLE Favourites(
	username VARCHAR (100) NOT NULL,
    fav_team_name VARCHAR (3),
    PRIMARY KEY (username,fav_team_name),
	FOREIGN KEY(username) REFERENCES User(username),
    FOREIGN KEY(fav_team_name) REFERENCES Team(team_abbrev)
);

CREATE TABLE Game(
	game_id VARCHAR(50) NOT NULL,
	game_day DATE NOT NULL,
	game_time TIME NOT NULL,
    away_team VARCHAR(3) NOT NULL,
    away_score INT,
	home_team VARCHAR(3) NOT NULL,
	home_score INT,
	PRIMARY KEY(game_id),
    FOREIGN KEY(away_team) REFERENCES Team(team_abbrev),
	FOREIGN KEY(home_team) REFERENCES Team(team_abbrev)
);

CREATE TABLE TeamAbbreviation (
team_abbrev VARCHAR (3) NOT NULL PRIMARY KEY, 
team_name VARCHAR(25), 
FOREIGN KEY(team_abbrev) REFERENCES Team(team_abbrev)
);

CREATE TABLE OffensiveFootballPlayer (
pf_name VARCHAR(35),
pl_name VARCHAR(35),
team_name VARCHAR(3),
pass_att INT,
pass_comp INT,
comp_pct DECIMAL,
pass_yds INT,
pass_ypg DECIMAL,
pass_td INT,
pass_int INT,
rush_att INT,
rush_yds INT,
rush_avg DECIMAL,
rush_ypg DECIMAL,
rush_td INT,
rec INT,
rec_yds INT,
rec_avg DECIMAL,
rec_ypg DECIMAL,
rec_td INT,
tar INT,
yac INT,
PRIMARY KEY(pf_name, pl_name, team_name),
FOREIGN KEY(team_name) REFERENCES Team(team_abbrev)
);

CREATE TABLE DefensiveFootballPlayer (
pf_name VARCHAR(35),
pl_name VARCHAR(35),
team_name VARCHAR(3),
def_int INT,
def_td INT,
def_tackles DECIMAL,
def_sacks DECIMAL,
PRIMARY KEY(pf_name, pl_name, team_name),
FOREIGN KEY(team_name) REFERENCES Team(team_abbrev)
);

CREATE TABLE Kicker (
pf_name VARCHAR(35),
pl_name VARCHAR(35),
team_name VARCHAR(3),
xp_made INT,
xp_att INT,
fg_made INT,
fg_att INT,
PRIMARY KEY(pf_name, pl_name, team_name),
FOREIGN KEY(team_name) REFERENCES Team(team_abbrev)
);








