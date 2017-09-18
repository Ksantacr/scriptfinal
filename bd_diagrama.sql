SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
 DROP Database db_diagrama;
CREATE Database db_diagrama;
Use db_diagrama;
--
-- Database: `db_diagrama`
--
-- --------------------------------------------------------
--
-- Table structure for table `diagrama`
--

CREATE TABLE IF NOT EXISTS users (
id int primary key auto_increment,
email varchar(255) not null,
nombre varchar(255) not null,
password varchar(255) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (`email`,`nombre`,`password`) VALUES 
("kevin@mail.com", "Kevin", "$2a$10$ASPZMPuqG.cJ6TgvSPpCmeIHn96TXlkhJrZ/BjVigTHcA.bNf.G7C"),
("joel@mail.com", "Joel", "$2a$10$ASPZMPuqG.cJ6TgvSPpCmeIHn96TXlkhJrZ/BjVigTHcA.bNf.G7C");

CREATE TABLE IF NOT EXISTS `diagrama` (
`id` int primary key auto_increment,
`id_usuario` int NOT NULL,
  `name` varchar(500) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `version` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `flecha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table `diagrama`
--
INSERT INTO `diagrama` (`id`,`id_usuario`,`name`,`position`,`version`, `author`,`flecha`) VALUES
(1,1,'Documento 1', '-32.51201375084611 12.124551391601585' , '1','Joel', 'PentagonArrow'),
(2,1,'Proyecto de flujos', '-32.51201375084611 12.124551391601585' ,'1','Kevin', 'Circle'),
(3,1,'Deber Nuevo', '-32.51201375084611 12.124551391601585' , '2','Joel', 'NormalArrow'),
(4,2,'Pasantías', '-32.51201375084611 12.124551391601585' , '2','Joel', 'NormalArrow');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Table structure for table `diagrama`
--
CREATE TABLE IF NOT EXISTS `figura` (
  `idDiagrama` int NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `figure` varchar(100) DEFAULT NULL,
  `fill` varchar(100) DEFAULT NULL,
  `key` int DEFAULT NULL,
  `loc` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `figura` (`idDiagrama`, `text`,`figure`, `fill`, `key`, `loc`) VALUES
-- {"text":"Condición", "figure":"Diamond", "fill":"lightskyblue", "key":-3, "loc":"380 220"},
-- {"text":"Fin", "figure":"Circle", "fill":"#CE0620", "key":-4, "loc":"270 340"},
-- {"text":"Comentario", "figure":"RoundedRectangle", "fill":"lightyellow", "key":-5, "loc":"620 290"}
('1', 'Condición' , 'Diamond','lightskyblue', -3, '380 220'),
('2', 'Fin' , 'Circle','#CE0620', -4, '270 340'),
('2', 'Condición' , 'Diamond','lightskyblue', -3, '520 330'),
('1', 'Comentario' , 'RoundedRectangle','lightyellow', -5, '620 290'),
('3', 'Fin' , 'Circle','#CE0620', -4, '270 340'),
('3', 'Inicio' , 'Circle','#00AD5F', -1, '500 450'),
('3', 'Condición' , 'Diamond','lightskyblue', -3, '600 590'),
('3', 'Fin' , 'Circle','lightyellow', -5, '740 490'),
('3', 'Comentario' , 'Circle','lightyellow', -6, '430 540'),
('3', 'Condición' , 'Circle','lightskyblue', -7, '380 380'),
('4', 'Inicio' , 'Circle','#00AD5F', -1, '150 210'),
('4', 'Comentario' , 'RoundedRectangle','lightyellow', -5, '430 220');


CREATE TABLE IF NOT EXISTS `points` (
  `idDiagrama` int DEFAULT NULL,
  `points` varchar(1000) DEFAULT NULL,
  `from` int DEFAULT NULL,
  `to` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `points` (`idDiagrama`, `points`, `from`, `to`) VALUES
('1', '121.109375,284,151.109375,284,151.109375,324,181.109375,324', 0, 0),
('1', '468.6607360839844,220,478.6607360839844,220,620,220,620,240.15042597332342,620,260.30085194664684,620,270.30085194664684', 0, 0),
('2', '431.3392639160156,330,421.3392639160156,330,364.6696319580078,330,364.6696319580078,340,308,340,298,340', 0, 0),
('3', '380,252.87544860839841,380,262.8754486083984,380,340,344.30190183950026,340,308.6038036790005,340,298.6038036790005,340', 0,0),
('3', '468.6607360839845,380,478.6607360839845,380,476,380,476,380,548,380,548,500,500,500,500,590,501.3392639160157,590,511.3392639160157,590', 0, 0),
('3', '540.4491594891216,450,550.4491594891216,450,625.9226779050605,450,625.9226779050605,490,701.3961963209995,490,711.3961963209995,490', 0,0),
('4', '190.44915948912154,210,200.44915948912154,210,283.9805866199838,210,283.9805866199838,220,367.51201375084605,220,377.51201375084605,220', 0,0);
