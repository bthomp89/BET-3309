
CREATE VIEW UserFavourites 
AS SELECT username, fav_team_name
FROM Favourites
WHERE username = 'test';

CREATE VIEW FavouritedTeamStats
AS SELECT * 
FROM Team
JOIN Favourites
ON Team.team_abbrev = Favourites.fav_team_name
WHERE username = 'test';

CREATE VIEW LeaugeAverages AS SELECT 
AVG(points_for / (games_won + games_lost + games_tied)) AS avg_pf, 
AVG(points_against / (games_won + games_lost + games_tied)) AS avg_pa, 
AVG(pass_yards  / (games_won + games_lost + games_tied)) AS avg_passf, 
AVG(pass_yards_against  / (games_won + games_lost + games_tied)) AS avg_passa, 
AVG(rush_yards  / (games_won + games_lost + games_tied)) AS avg_rushf,
AVG(rush_yards_against  / (games_won + games_lost + games_tied)) AS avg_rusha
FROM Team;
