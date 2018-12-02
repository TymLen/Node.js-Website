-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: provik
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `complete` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `ProjectTime` varchar(255) DEFAULT NULL,
  `ProjectPic` varchar(255) DEFAULT 'noPic.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Escape from Gargoyle Tower','Complete','Unity (c#) virtual reality game for PC and android made for Murdoch University assignment','1/5/2018 - 28/5/2018  ','EscapeIcon.png'),(2,'Quest for Fitness','Complete','Fitness management android application with RPG aesthetic made for Murdoch University assignment','9/10/2018 - 4/11/2018','Q4FIcon.png'),(3,'IoT Visualisation Project','Complete','IT Practice Project involving a proof of concept system that visualises IoT device data using scripts and Pharos Lighting Playback Controller. Worked as part of a team of 7 other students.','1/9/2018 - 31/10/2018','IoTIcon.png'),(4,'This Website','Ongoing','Creating a website to host information about me and my projects.\r This website is also a sandbox for learning node.js, AJAX, JQuery, and MySQL Database/Server.','20/11/2018 - ','noPic.png');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectslong`
--

DROP TABLE IF EXISTS `projectslong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `projectslong` (
  `id` int(11) NOT NULL,
  `proID` int(11) NOT NULL,
  `allInfo` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `proID` (`proID`),
  CONSTRAINT `projectslong_ibfk_1` FOREIGN KEY (`proID`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectslong`
--

LOCK TABLES `projectslong` WRITE;
/*!40000 ALTER TABLE `projectslong` DISABLE KEYS */;
INSERT INTO `projectslong` VALUES (1,1,'Unity virtual reality game for PC and android made for ICT288 Murdoch University Assignment.<br><br>The game consists of a main menu, 3 gameplay levels, and 1 intermission/story level <br>\r The theme for the first level is nature/earth where the player must solve a simple rgb light puzzle.<br>\r The second level has a theme of fire and the player must navigate an avoidance/puzzle section but the player must look for clues in the \r environment that hint where is safe to walk while also avoiding fireballs <br>\r Next is an intermission level where a bit of story about the tower is revealed and the player obtains a weapon. This level also serves as a \r tutorial area for the weapon before they have to use it<br>\r The final level is a boss fight where the player must avoid dark orbs being shot from the boss while shooting it with their weapon. As the boss\'\r hp decreases, the amount of dark orbs the boss shoots increase making the fight more difficult <br>\r Together with the main challenges in the level the player also has additional objectives that serve as additional challenge that the player can\r attempt. Level 1: Additional Puzzle, Level 2: Find hidden path using a clue, and Level 3: Defeat the boss without getting hit. For each challenge\r that the player succeeds, the main menu changes with some of the gargoyles appearing around the campfire and if all challenges are completed, the\r weapon also appears to signify that the player has completed their quest.<br><br>\r Media:<br><br>\r <a href=\"https://www.youtube.com/watch?v=S-MFq3cO3kk\" rel=\"noopener noreferrer\" target=\"_blank\">Promotion Video</a>'),(2,2,'Fitness management android application with RPG aesthetic made for Murdoch University assignment. <br><br>Requirements:<br>Has a UI and allows user interaction.<br>Uses Fragments, a database, and at least one feature specific to mobile devices (camera). Extended requirement to included background service for music.<br>Employ a test plan. Extended requirement to included espresso UI Tests<br>Present application to class using appropriate powerpoint<br>Create promotional video<br><br>Media:<br><br><a href=\"https://www.youtube.com/watch?v=ZVrQzjrVdHY\" rel=\"noopener noreferrer\" target=\"_blank\">Promotion Video</a>'),(3,3,'IT Practice Project involving a proof of concept system that visualises IoT device data using scripts and Pharos Lighting Playback Controller. Worked as part of a team of 7 other students.<br><br>Responsibilities:<br>Project Management Roles: Secretary/Activity Coordinator<br>Learnt LUA code and solo developed Pharos Projects files<br>Created minutes/agends for weekly SCRUM meetings with client, supervisor, and other team members.<br>Communicated progress and targets to clients and other team members. Suggested targets for other team members.<br>Publically presented pharos side of solution to other students and industry professionals in lecture theatre.<br>Helped bring project to close by setting schedule and calling end of development.<br><br>Media:<br><br><a href=\"https://www.youtube.com/watch?v=UEi6091CwFo\" rel=\"noopener noreferrer\" target=\"_blank\">Temp Increasing</a> <a href=\"https://www.youtube.com/watch?v=W6mq9Xb-G2s\" rel=\"noopener noreferrer\" target=\"_blank\">UPS Decreasing</a>'),(4,4,'Creating a website to host information about me and my projects.<br><br>Version 1 Complete: Basic website done. Project content loaded from SQL database and content boxes created dynamically based upon content and number of projects. Plan to further streamline the process of adding projects/uploading images. Completed and hosted in 5 days');
/*!40000 ALTER TABLE `projectslong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `proid` int(11) DEFAULT NULL,
  `skills` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `proid` (`proid`),
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`proid`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,1,'C#, Unity, Software Documentation, Testing, Adobe Premiere, Android, PC, Solo Development'),(2,2,'Java, Testing, Software Documentation, Adobe Premiere, Android, SQL, Solo Development'),(3,3,'Project Management, Team, Lua, Pharos Designer 2, SCRUM, Software Documentation'),(4,4,'Node.js, JQuery, AJAX, SQL, HTML, Javascript, Trello, Solo Development');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-02 13:20:30
