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
-- Temporary view structure for view `leaugeaverages`
--

DROP TABLE IF EXISTS `leaugeaverages`;
/*!50001 DROP VIEW IF EXISTS `leaugeaverages`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `leaugeaverages` AS SELECT 
 1 AS `avg_pf`,
 1 AS `avg_pa`,
 1 AS `avg_passf`,
 1 AS `avg_passa`,
 1 AS `avg_rushf`,
 1 AS `avg_rusha`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `leaugeaverages`
--

/*!50001 DROP VIEW IF EXISTS `leaugeaverages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `leaugeaverages` AS select avg((`team`.`points_for` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_pf`,avg((`team`.`points_against` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_pa`,avg((`team`.`pass_yards` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_passf`,avg((`team`.`pass_yards_against` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_passa`,avg((`team`.`rush_yards` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_rushf`,avg((`team`.`rush_yards_against` / ((`team`.`games_won` + `team`.`games_lost`) + `team`.`games_tied`))) AS `avg_rusha` from `team` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-05 14:44:28
