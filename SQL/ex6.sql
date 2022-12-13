UPDATE OffensiveFootballPlayer ofp, DefensiveFootballPlayer dfp
SET ofp.team_name = dfp.team_name, dfp.team_name = ofp.team_name
WHERE ofp.pf_name = "Tom" AND ofp.pl_name = "Brady" AND dfp.pf_name ="Aaron" AND dfp.pl_name = "Donald";

DELETE Favourites, User
FROM Favourites 
JOIN User 
ON User.username = Favourites.username
WHERE User.Username = "tis"

UPDATE Team SET user_favourites = (SELECT COUNT(*) FROM Favourites WHERE fav_team_name = 'BUF') WHERE team_abbrev = 'BUF';

