-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- 생성 시간: 18-12-08 20:24
-- 서버 버전: 5.7.21
-- PHP 버전: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `jeong129_portfolio`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_about`
--

DROP TABLE IF EXISTS `tbl_about`;
CREATE TABLE IF NOT EXISTS `tbl_about` (
  `about_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `about_text` text NOT NULL,
  PRIMARY KEY (`about_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_about`
--

INSERT INTO `tbl_about` (`about_id`, `about_text`) VALUES
(1, 'Hello! My name is Jeongyun Cho and I\'m passionate about Motion Graphics, Design, and Front-End Development. I was born in Ansan, Korea, studied there until I graduate the High School. On my last year of it, I realized that I really want to study something more dynamic in a new environment.'),
(2, 'When I decided to go to London, ON, Canada I looked at all the courses at Fanshawe College and look for the most attractive course. Music, Movie, Coding, Fashion was my interests and I found a course which has a design, coding combined together, Interactive Media Design Program. I did not hesitate to take the course and I\'m on my Second Year now. So far I\'m confident of what I learned and can see my improvement every day. I\'m looking forward to what I could build when I graduate.'),
(3, '- I\'m updating my story whenever I have words to write down :)');

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_images`
--

DROP TABLE IF EXISTS `tbl_images`;
CREATE TABLE IF NOT EXISTS `tbl_images` (
  `images_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `images_url` varchar(50) NOT NULL,
  PRIMARY KEY (`images_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_images`
--

INSERT INTO `tbl_images` (`images_id`, `images_url`) VALUES
(1, 'work1_car-m.png'),
(2, 'work1_car-d.png'),
(3, 'work2_bottle-m.png'),
(4, 'work2_bottle-d.png'),
(5, 'work3_kim-m.png'),
(6, 'work3_kim-d.png'),
(7, 'work1_carW-d2.png'),
(8, 'work1_carW-d3.png'),
(9, 'work1_carW-d4.png'),
(10, 'work1_carW-d5.png'),
(11, 'work2_bottleW-d2.jpg'),
(12, 'work2_bottleW-d3.jpg'),
(13, 'work2_bottleW-d4.jpg'),
(14, 'work2_bottleW-d5.jpg'),
(15, 'work3_kimW-d2.jpg'),
(16, 'work3_kimW-d3.jpg'),
(17, 'work3_kimW-d4.png'),
(18, 'work3_kimW-d5.png'),
(19, 'work4_demo-m.png'),
(20, 'work4_demo-d.png'),
(21, 'work4_demo-d2.png'),
(22, 'work4_demo-d3.png'),
(23, 'work4_demo-d4.png'),
(24, 'work4_demo-d5.png');

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_img_works`
--

DROP TABLE IF EXISTS `tbl_img_works`;
CREATE TABLE IF NOT EXISTS `tbl_img_works` (
  `img_works_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `images_id` tinyint(4) NOT NULL,
  `works_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`img_works_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_img_works`
--

INSERT INTO `tbl_img_works` (`img_works_id`, `images_id`, `works_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 7, 1),
(4, 8, 1),
(5, 9, 1),
(6, 10, 1),
(7, 3, 2),
(8, 4, 2),
(9, 11, 2),
(10, 12, 2),
(11, 13, 2),
(12, 14, 2),
(13, 5, 3),
(14, 6, 3),
(15, 15, 3),
(16, 16, 3),
(17, 17, 3),
(18, 18, 3),
(19, 19, 4),
(20, 20, 4),
(21, 21, 4),
(22, 22, 4),
(23, 23, 4),
(24, 24, 4);

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_works`
--

DROP TABLE IF EXISTS `tbl_works`;
CREATE TABLE IF NOT EXISTS `tbl_works` (
  `works_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `works_title` varchar(25) NOT NULL,
  `works_desc` text NOT NULL,
  `works_videoUrl` varchar(100) NOT NULL,
  `works_videoDesc` text NOT NULL,
  PRIMARY KEY (`works_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_works`
--

INSERT INTO `tbl_works` (`works_id`, `works_title`, `works_desc`, `works_videoUrl`, `works_videoDesc`) VALUES
(1, 'Car Promo APP', 'Our main goal of this project is to create an interactive application using 3D, video, audio and still images. Design and develop an App with which user can view video, explore specs, etc for a car.\r\n\r\nI was the motion graphic designer, Project Manager and front-end developer for this project. I modified, textured and built a scene of car modelling in c4d, bring it to aftereffect give a final touch. Design wise, I decided the entire layout of the app and currently on the progress of coding the actual app.\r\n\r\n- Under Construction, due 2019', 'https://www.youtube.com/embed/F3x9N8LDiiU', 'For this video, I used c4d to build entire cuts and sync the music. I found it easier to develop scenes to match the initial concept I set at the beginning by using this method. These are the initial style frames that I made that gave me clear direction with the animation.'),
(2, 'Infuser Bottle', 'Our main goal of this project is to create a unique design and functionality for a thermal bottle with detachable infuser pod.\r\n\r\nI was the motion graphic designer and Project Manager for this project. I created the entire brand, from the logo,label, to developing the elements of the brand, designing the product(bottle), do modeling in c4d and make a promo video for it.', 'https://www.youtube.com/embed/aFujUqRNDQw', 'For this video, I focused on showing all the elements of the product in one smooth camera movement. These are some of the rendered images of the bottle.'),
(3, 'Kim Kyeongmi Hanbok', 'For this project, I rebranded a website for Hanbok Designer Kim Kyeong Mi. The original website was built with WordPress and the client wanted to keep it in WordPress. I visited the shop, took some photos to use for the website and rebuilt from logo to the entire website.', '', ''),
(4, 'Demo Reel', 'A demo reel of my most recent video work including personal and school projects from the past two years. I built the entire project from the basic concept with style frames.', 'https://www.youtube.com/embed/cZKcU1_XwYM', 'For this video, c4d is used to model 3D and lighting then aftereffect to give a final touch including music. These are the style frames of the demo reel.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
