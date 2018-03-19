-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2018 at 12:03 AM
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
  `close_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idcategory` bigint(20) UNSIGNED NOT NULL,
  `cafe` tinyint(1) NOT NULL,
  `restaurant` tinyint(1) NOT NULL,
  `bar` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `idinformation` bigint(20) UNSIGNED NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `price_range` int(4) NOT NULL,
  `takeaway` tinyint(1) NOT NULL,
  `delivery` tinyint(1) NOT NULL,
  `accessible` tinyint(1) NOT NULL,
  `vegan` tinyint(1) NOT NULL,
  `vegetarian` tinyint(1) NOT NULL,
  `non-smoker` tinyint(1) NOT NULL,
  `smoker` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ranking`
--

CREATE TABLE `ranking` (
  `idranking` bigint(20) UNSIGNED NOT NULL,
  `ambience` double NOT NULL,
  `food` double NOT NULL,
  `price` double NOT NULL,
  `service` double NOT NULL,
  `recommendation` int(11) NOT NULL,
  `ratings` int(11) NOT NULL
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
  `date_registered` datetime NOT NULL,
  `category_idcategory` bigint(20) UNSIGNED NOT NULL,
  `businesshours_idbusinesshours` bigint(20) UNSIGNED NOT NULL,
  `ranking_idranking` bigint(20) UNSIGNED NOT NULL,
  `information_idinformation` bigint(20) UNSIGNED NOT NULL
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
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`idinformation`);

--
-- Indexes for table `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`idranking`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`idrestaurant`),
  ADD KEY `category_idcategory` (`category_idcategory`),
  ADD KEY `businesshours_idbusinesshours` (`businesshours_idbusinesshours`),
  ADD KEY `ranking_idranking` (`ranking_idranking`),
  ADD KEY `information_idinformation` (`information_idinformation`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `idcategory` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `idinformation` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ranking`
--
ALTER TABLE `ranking`
  MODIFY `idranking` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `idrestaurant` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `businesshours_idbusinesshours` FOREIGN KEY (`businesshours_idbusinesshours`) REFERENCES `businesshours` (`idbusinesshours`),
  ADD CONSTRAINT `category_idcategory` FOREIGN KEY (`category_idcategory`) REFERENCES `category` (`idcategory`),
  ADD CONSTRAINT `information_idinformation` FOREIGN KEY (`information_idinformation`) REFERENCES `information` (`idinformation`),
  ADD CONSTRAINT `ranking_idranking` FOREIGN KEY (`ranking_idranking`) REFERENCES `ranking` (`idranking`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
