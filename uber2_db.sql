-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: uber2.db
-- Generation Time: Apr 25, 2017 at 08:08 PM
-- Server version: 10.1.18-MariaDB-1~xenial
-- PHP Version: 5.6.28-nfsn1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uber2`
--
CREATE DATABASE IF NOT EXISTS `uber2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `uber2`;

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `req_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `driver` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`req_id`, `user_id`, `driver`, `lat`, `lng`, `time`, `status`) VALUES
(1, 1, 0, 37.3351874, -121.88107150000002, '2017-04-20 21:46:56', 'pending'),
(3, 21, 0, 38.732968, -121.8072828, '2017-04-20 23:10:52', 'pending'),
(4, 24, 0, 38.732968, -121.8072828, '2017-04-24 19:59:52', 'pending'),
(5, 25, 0, 37.3382082, -121.88632860000001, '2017-04-25 01:11:39', 'pending'),
(6, 26, 0, 27.6648274, -81.51575350000002, '2017-04-25 04:11:43', 'pending'),
(7, 16, 0, 27.6648274, -81.51575350000002, '2017-04-25 07:49:47', 'pending'),
(8, 28, 0, 27.6648274, -81.51575350000002, '2017-04-25 18:51:15', 'pending'),
(9, 31, 0, 37.6213129, -122.3789554, '2017-04-25 19:05:16', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `is_driver` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `pass`, `is_driver`) VALUES
(1, 'alex_heritier', 'alex.heritier@gmail.com', 'yoloking', 1),
(12, '', 'qwerty@qwerty.com', 'qwerty', 1),
(13, '', 'huy.g.nguyen@sjsu.edu', '123456', 0),
(14, '', 'turelldagr8@gmail.com', 'yolo', 1),
(15, '', 'jacksonmiley@gmail.com', 'AAAbbb666', 1),
(16, '', '123456@gmail.com', '123456', 0),
(17, '', 'luan@test.com', 'luan', 1),
(18, '', 'luan2@test.com', 'test', 0),
(20, '', '1234567@gmail.com', '123456', 0),
(21, '', 'haha@haha.com', 'haha', 0),
(22, '', 'david@test.com', 'test', 0),
(23, '', 'testme@root', 'root', 1),
(24, '', 'a@a.a', 'a', 1),
(25, '', 'david@david', 'david', 0),
(26, '', 'shlomoyrnazarian@gmail.com', 'testinguber2', 0),
(27, '', 'jamesbond@gmail.com', '1234', 0),
(28, '', 'jamesbond1@gmail.com', '1234', 1),
(29, '', 'driver@driver', 'driver', 1),
(30, '', 'b@b.com', 'b', 0),
(31, '', 'jamesbond2@gmail.com', '1234', 0),
(32, '', 'jamesbond33@gmail.com', '1234', 0),
(33, '', 'jamesbond10@gmail.com', '1234', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
