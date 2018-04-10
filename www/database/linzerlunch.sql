-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 11, 2018 at 12:45 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linzerlunch`
--

-- --------------------------------------------------------

--
-- Table structure for table `businesshours`
--

CREATE TABLE `businesshours` (
  `idbusinesshours` bigint(20) UNSIGNED NOT NULL,
  `day` varchar(1) COLLATE latin1_general_ci NOT NULL,
  `open_time` time NOT NULL,
  `close_time` time NOT NULL,
  `kitchen_close` time DEFAULT NULL,
  `restaurant_idrestaurant` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `idrestaurant` bigint(20) UNSIGNED NOT NULL,
  `restaurant_name` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `street` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `plz` varchar(4) COLLATE latin1_general_ci NOT NULL,
  `city` varchar(50) COLLATE latin1_general_ci NOT NULL,
  `website` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `phone` varchar(30) COLLATE latin1_general_ci DEFAULT NULL,
  `menu` longtext COLLATE latin1_general_ci NOT NULL,
  `date_registered` datetime NOT NULL,
  `category` longtext COLLATE latin1_general_ci NOT NULL,
  `information` longtext COLLATE latin1_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `businesshours`
--
ALTER TABLE `businesshours`
  ADD PRIMARY KEY (`idbusinesshours`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`idrestaurant`);
ALTER TABLE `restaurant` ADD FULLTEXT KEY `full_idx` (`category`,`information`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `idrestaurant` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `businesshours`
--
ALTER TABLE `businesshours`
  ADD CONSTRAINT `restaurant_idrestaurant` FOREIGN KEY (`idbusinesshours`) REFERENCES `restaurant` (`idrestaurant`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
