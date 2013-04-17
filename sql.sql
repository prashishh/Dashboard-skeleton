-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 18, 2013 at 12:12 AM
-- Server version: 5.1.37
-- PHP Version: 5.2.11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `NodeSample`
--

-- --------------------------------------------------------

--
-- Table structure for table `BarSample`
--

CREATE TABLE `BarSample` (
  `title` varchar(100) NOT NULL,
  `value` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `BarSample`
--

INSERT INTO `BarSample` VALUES('A', 0.2);
INSERT INTO `BarSample` VALUES('B', 0.3);
INSERT INTO `BarSample` VALUES('C', 0.1);
INSERT INTO `BarSample` VALUES('D', 0.3);
INSERT INTO `BarSample` VALUES('E', 0.06);

-- --------------------------------------------------------

--
-- Table structure for table `MyTable`
--

CREATE TABLE `MyTable` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `MyTable`
--


-- --------------------------------------------------------

--
-- Table structure for table `PieSample`
--

CREATE TABLE `PieSample` (
  `title` varchar(11) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `PieSample`
--

INSERT INTO `PieSample` VALUES('<5', 2704659);
INSERT INTO `PieSample` VALUES('5-13', 4499890);
INSERT INTO `PieSample` VALUES('14-17', 2159981);
INSERT INTO `PieSample` VALUES('18-24', 3853788);
INSERT INTO `PieSample` VALUES('25-44', 14106543);
INSERT INTO `PieSample` VALUES('45-64', 8819342);
INSERT INTO `PieSample` VALUES('>=65', 612463);
