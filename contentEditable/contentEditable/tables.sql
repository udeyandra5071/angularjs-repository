-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2015 at 08:40 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tables`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
`id` smallint(5) unsigned NOT NULL,
  `publicationDate` date NOT NULL,
  `title` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `content` mediumtext NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `publicationDate`, `title`, `summary`, `content`) VALUES
(1, '2015-09-23', 'asdfasfd', 'pppppppppppppfretretppppppppppppp', '<div class="nis_conatiner-leran" style="border: 1px solid red; padding: 5px;">asdfdfsgfdsgg&nbsp;</div>'),
(4, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 added</div>'),
(5, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 added</div>'),
(6, '0000-00-00', '', '', 'asdsd'),
(7, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1</div>'),
(8, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1</div>'),
(9, '0000-00-00', '', '', '<div class="mainblock" id="blockcount1">block1 fdgdfghdfghf rtyh53534534536455654764</div>'),
(10, '0000-00-00', '', '', '<div class="mainblock" id="blockcount1">block1 fdgdfghdfghf rtyh53534534536455654764</div>'),
(11, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block13566</div>'),
(12, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block13566</div>'),
(13, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1 5678990</div>'),
(14, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1 5678990</div>'),
(15, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 5678990 cghfguj</div>'),
(16, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 5678990 cghfguj</div>'),
(17, '0000-00-00', '', '', 'cxcxccxxc'),
(18, '0000-00-00', '', '', 'cxcxccxxc'),
(19, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 ddgfg 12334</div>'),
(20, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 ddgfg 12334</div>'),
(21, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 12345678</div>'),
(22, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 12345678</div>'),
(23, '0000-00-00', '', '', 'wrew'),
(24, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 4567</div>'),
(25, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 45678</div>'),
(26, '0000-00-00', '', '', '\n	    <div class="mainblock" id="blockcount1">block1 45678</div>'),
(27, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1 67890</div>'),
(28, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1 67890</div>'),
(29, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1</div><div class="mainblock" id="blockcount2">block2</div><div class="mainblock" id="blockcount3">block3</div><div class="mainblock" id="blockcount4">block4</div><div class="mainblock" id="blockcount5">block5</div>'),
(30, '0000-00-00', '', '', ''),
(31, '0000-00-00', '', '', '	    <div class="mainblock" id="blockcount1">block1</div><div class="mainblock" id="blockcount2">block2</div><div class="mainblock" id="blockcount3">block3</div><div class="mainblock" id="blockcount4">block4</div><div class="mainblock" id="blockcount5">block5</div>'),
(32, '0000-00-00', '', '', '\n	   <div class="col s12 displaycontrols" contenteditable="false" style="display: block;">\n   \n   </div>\n	    <div class="col s12"><div class="col s2"><a class="btn red inner-block">Add block</a></div> <div class="col s2"><a class="btn red">Add Time</a></div><div class="col s2"><a class="btn red">Block size</a></div><div class="col s2"><a class="btn red">Add Animation</a></div><div class="col s2"><a class="btn red">Add Image</a></div><div class="col s2"><a class="btn red">Add Video</a></div></div><div class="mainblock" id="slideshow1">Slideshow1 dfdfd</div>'),
(33, '0000-00-00', '', '', '	   <div class="col s12 displaycontrols" contenteditable="false" style="display: block;">      </div>	    <div class="col s12"><div class="col s2"><a class="btn red inner-block">Add block</a></div> <div class="col s2"><a class="btn red">Add Time</a></div><div class="col s2"><a class="btn red">Block size</a></div><div class="col s2"><a class="btn red">Add Animation</a></div><div class="col s2"><a class="btn red">Add Image</a></div><div class="col s2"><a class="btn red">Add Video</a></div></div><div class="mainblock" id="slideshow1">Slideshow1 yuoo</div>'),
(34, '0000-00-00', '', '', '	    <div class="col s12"><div class="col s2"><a class="btn red inner-block">Add block</a></div> <div class="col s2"><a class="btn red">Add Time</a></div><div class="col s2"><a class="btn red">Block size</a></div><div class="col s2"><a class="btn red">Add Animation</a></div><div class="col s2"><a class="btn red">Add Image</a></div><div class="col s2"><a class="btn red">Add Video</a></div></div><div class="mainblock" id="slideshow1">Slideshow1 789</div>'),
(35, '2015-10-14', 'sdfgfdsgd', 'psdfsdfgp', '<div id="slideshow1" class="mainblock">Slideshdsdsdsdsow1</div>'),
(36, '0000-00-00', '', '', '	    <div class="mainblock" id="slideshow1">Slideshow1</div>'),
(37, '2015-10-13', 'ytdu', 'pydtrp', '<div id="slideshow1" class="mainblock" data-slide-time="0">Slideshow1</div>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
MODIFY `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
