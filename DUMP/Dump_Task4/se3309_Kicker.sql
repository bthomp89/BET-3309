-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: se3309
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Kicker`
--

DROP TABLE IF EXISTS `Kicker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Kicker` (
  `pf_name` varchar(35) NOT NULL,
  `pl_name` varchar(35) NOT NULL,
  `team_name` varchar(3) NOT NULL,
  `xp_made` int DEFAULT NULL,
  `xp_att` int DEFAULT NULL,
  `fg_made` int DEFAULT NULL,
  `fg_att` int DEFAULT NULL,
  PRIMARY KEY (`pf_name`,`pl_name`,`team_name`),
  KEY `team_name` (`team_name`),
  CONSTRAINT `kicker_ibfk_1` FOREIGN KEY (`team_name`) REFERENCES `Team` (`team_abbrev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Kicker`
--

LOCK TABLES `Kicker` WRITE;
/*!40000 ALTER TABLE `Kicker` DISABLE KEYS */;
INSERT INTO `Kicker` VALUES ('Austin','Seibert','DET',26,61,3,5),('Brandon','McManus','DEN',26,47,16,20),('Brett','Maher','DAL',26,37,15,17),('Cade','York','CLE',26,41,15,19),('Cairo','Santos','CHI',26,45,14,14),('Cameron','Dicker','PHI',26,59,7,7),('Chase','McLaughlin','IND',26,46,16,19),('Chris','Boswell','PIT',26,53,12,16),('Daniel','Carlson','LV',26,32,18,18),('Dominik','Eberle','DET',26,67,1,1),('Dustin','Hopkins','LAC',26,55,9,10),('Eddy','Pineiro','CAR',26,35,18,20),('Evan','McPherson','CIN',26,48,11,15),('Graham','Gano','NYG',26,33,18,20),('Greg','Joseph','MIN',26,43,13,18),('Greg','Zuerlein','NYJ',26,36,16,19),('Harrison','Butker','KC',26,58,5,8),('Jake','Elliott','PHI',26,54,6,8),('Jason','Myers','SEA',26,27,19,20),('Jason','Sanders','MIA',26,39,13,17),('Joey','Slye','WAS',26,49,13,15),('Justin','Reid','KC',26,68,0,0),('Justin','Tucker','BAL',26,29,18,20),('Ka\'imi','Fairbairn','HOU',26,40,17,19),('Mason','Crosby','GB',26,52,10,13),('Matt','Ammendola','ARI',26,62,5,7),('Matt','Gay','LA',26,51,12,13),('Matt','Prater','ARI',26,57,8,8),('Matthew','Wright','KC',26,60,5,8),('Michael','Badgley','CHI',26,56,9,9),('Mitch','Wishnowsky','SF',26,69,0,0),('Nick','Folk','NE',26,30,19,21),('Nick','Sciba','PIT',26,66,2,2),('Randy','Bullock','TEN',26,50,11,13),('Riley','Patterson','JAX',26,42,14,18),('Robbie','Gould','SF',26,44,13,16),('Rodrigo','Blankenship','ARI',26,63,4,5),('Ryan','Succop','TB',26,28,22,25),('Taylor','Bertolet','LAC',26,64,3,3),('Tristan','Vizcaino','ARI',26,65,2,2),('Tyler','Bass','BUF',26,31,15,18),('Wil','Lutz','NO',26,38,15,20),('Younghoe','Koo','ATL',26,34,16,20);
/*!40000 ALTER TABLE `Kicker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05 14:44:28
