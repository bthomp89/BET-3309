SELECT g.game_id, g.game_day, g.away_team, g.home_team, g.away_score, g.home_score, t.games_won AS home_wins, t.games_lost AS home_losses, t.games_tied AS home_ties,
tt.games_won AS away_wins, tt.games_lost AS away_losses, tt.games_tied AS away_ties
FROM (Game g JOIN Team t ON g.home_team = t.team_abbrev JOIN Team tt ON g.away_team = tt.team_abbrev) 
WHERE g.game_id LIKE '%2022_15%'

SELECT pf_name, pl_name FROM (
(SELECT team_name, pf_name, pl_name
	FROM OffensiveFootballPlayer AS offPlayer) 
    UNION
(SELECT team_name, pf_name, pl_name 
	FROM DefensiveFootballPlayer AS defPlayer)
    UNION
    (SELECT team_name, pf_name, pl_name FROM Kicker AS kickPlayer)) AS teamRoster WHERE team_name= "PHI";

SELECT COUNT(Division.div_name) AS playerCount, Division.div_name
FROM (OffensiveFootballPlayer
JOIN Team ON OffensiveFootballPlayer.team_name = Team.team_abbrev
JOIN Division ON Team.div_name = Division.div_name) WHERE pass_td > 10 GROUP BY Division.div_name;

SELECT Team.team_abbrev, Team.team_city, Team.games_won, Team.games_lost, Team.points_for, Team.points_against
FROM Team
INNER JOIN Favourites
ON Team.team_abbrev = Favourites.fav_team_name WHERE Favourites.username = "tisald";

SELECT pf_name, pl_name
FROM OffensiveFootballPlayer
WHERE team_name = "PHI"
ORDER BY rec_yds DESC LIMIT 4

SELECT team_abbrev, games_won
From Team
ORDER BY games_won DESC;

SELECT fav_team_name
FROM Favourites
WHERE username = "alexz";
