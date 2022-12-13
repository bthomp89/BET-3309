INSERT INTO User VALUES ( 'test', 'brayden', 'thompson', 'btomp89@uwo.ca' , 'password');
INSERT INTO Favourites (username,fav_team_name) VALUES ((SELECT username FROM User WHERE username = 'test'),(SELECT team_abbrev FROM Team WHERE team_abbrev = 'BUF'));
INSERT INTO Game (game_id, game_day, game_time, away_team, home_team) VALUES
('2023_01_BUF_KC', 2023-07-09, '13:00',(SELECT team_abbrev FROM Team WHERE team_abbrev = 'BUF'), (SELECT team_abbrev FROM Team WHERE team_abbrev = 'KC')),
('2023_01_IND_PHI', 2023-07-09, '13:00',(SELECT team_abbrev FROM Team WHERE team_abbrev = 'IND'), (SELECT team_abbrev FROM Team WHERE team_abbrev = 'PHI')),
('2023_01_PIT_DEN', 2023-07-09, '13:00',(SELECT team_abbrev FROM Team WHERE team_abbrev = 'PIT'), (SELECT team_abbrev FROM Team WHERE team_abbrev = 'DEN'));