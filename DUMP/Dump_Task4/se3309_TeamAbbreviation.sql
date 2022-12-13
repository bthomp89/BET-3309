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
-- Table structure for table `TeamAbbreviation`
--

DROP TABLE IF EXISTS `TeamAbbreviation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TeamAbbreviation` (
  `team_abbrev` varchar(3) NOT NULL,
  `team_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`team_abbrev`),
  CONSTRAINT `teamabbreviation_ibfk_1` FOREIGN KEY (`team_abbrev`) REFERENCES `Team` (`team_abbrev`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TeamAbbreviation`
--

LOCK TABLES `TeamAbbreviation` WRITE;
/*!40000 ALTER TABLE `TeamAbbreviation` DISABLE KEYS */;
INSERT INTO `TeamAbbreviation` VALUES ('ARI','Cardinals'),('ATL','Falcons'),('BAL','Ravens'),('BUF','Bills'),('CAR','Panthers'),('CHI','Bears'),('CIN','Bengals'),('CLE','Browns'),('DAL','Cowboys'),('DEN','Broncos'),('DET','Lions'),('GB','Packers'),('HOU','Texans'),('IND','Colts'),('JAX','Jaguars'),('KC','Chiefs'),('LA','Rams'),('LAC','Chargers'),('LV','Raiders'),('MIA','Dolphins'),('MIN','Vikings'),('NE','Patriots'),('NO','Saints'),('NYG','Giants'),('NYJ','Jets'),('PHI','Eagles'),('PIT','Steelers'),('SEA','Seattle'),('SF','49ers'),('TB','Buccaneers'),('TEN','Titans'),('WAS','Commanders');
/*!40000 ALTER TABLE `TeamAbbreviation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05 14:44:26
