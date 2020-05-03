-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Час створення: Квт 10 2020 р., 18:46
-- Версія сервера: 10.4.11-MariaDB
-- Версія PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `projekt`
--

-- --------------------------------------------------------

--
-- Структура таблиці `Access`
--

CREATE TABLE `Access` (
  `id_access` int(2) UNSIGNED NOT NULL,
  `description` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Access`
--

INSERT INTO `Access` (`id_access`, `description`) VALUES 
(1, 'N'),
(2, 'W'),
(3, 'R'),
(4, 'RW');

-- --------------------------------------------------------

--
-- Структура таблиці `Classification`
--

CREATE TABLE `Classification` (
  `id_classification` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Comment`
--

CREATE TABLE `Comment` (
  `id_comment` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `description` varchar(230) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Content`
--

CREATE TABLE `Content` (
  `id_content` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_access` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Img`
--

CREATE TABLE `Img` (
  `id_img` int(10) UNSIGNED NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Img`
--

INSERT INTO `Img` (`id_img`, `url`) VALUES
(1, 'img/anon.jpg'),
(2, 'img/admin.jpg'),
(3, 'img/mf.jpg'),
(4, 'img/szrek.jpg'),
(5, 'img/face.jpg'),
(6, 'img/standard/f');

-- --------------------------------------------------------

--
-- Структура таблиці `Kurs`
--

CREATE TABLE `Kurs` (
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `description` varchar(230) NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_access` int(2) UNSIGNED NOT NULL,
  `id_main_page` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Kurs_Classification`
--

CREATE TABLE `Kurs_Classification` (
  `id_kurs_classification` int(10) UNSIGNED NOT NULL,
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_classification` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Post`
--

CREATE TABLE `Post` (
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `description` varchar(230) NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_access` int(2) UNSIGNED NOT NULL,
  `id_test` int(10) UNSIGNED DEFAULT NULL,
  `content` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Post_Classification`
--

CREATE TABLE `Post_Classification` (
  `id_post_classification` int(10) UNSIGNED NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_classification` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Post_Comment`
--

CREATE TABLE `Post_Comment` (
  `id_post_comment` int(10) UNSIGNED NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_comment` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Session`
--

CREATE TABLE `Session` (
  `id_session` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_status` int(2) UNSIGNED NOT NULL,
  `ip_address` varchar(15) NOT NULL,
  `lastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `Status`
--

CREATE TABLE `Status` (
  `id_status` int(2) UNSIGNED NOT NULL,
  `description` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Status`
--

INSERT INTO `Status` (`id_status`, `description`) VALUES
(1, 'ENTER'),
(2, 'EXIT');

-- --------------------------------------------------------

--
-- Структура таблиці `Status_user`
--

CREATE TABLE `Status_user` (
  `id_status_user` int(2) UNSIGNED NOT NULL,
  `description` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Status_user`
--

INSERT INTO `Status_user` (`id_status_user`, `description`) VALUES
(1, 'ADMIN'),
(2, 'USER'),
(3, 'MODERATOR'),
(4, 'PUBLIC'),
(5, 'DELETED');

-- --------------------------------------------------------

--
-- Структура таблиці `Test`
--

CREATE TABLE `Test` (
  `id_test` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `content` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `User`
--

CREATE TABLE `User` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_status` int(2) UNSIGNED NOT NULL,
  `passwd` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `User`
--

INSERT INTO `User` (`id_user`, `username`, `email`, `creation_date`, `modification_date`, `id_img`, `id_status`, `passwd`) VALUES
(1, 'Borys', 'mushkaborys@gmail.com', '2020-04-07 15:09:18', '2020-04-07 15:09:40', 3, 2, 'c4ca4238a0b923820dcc509a6f75849b');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `Access`
--
ALTER TABLE `Access`
  ADD PRIMARY KEY (`id_access`);

--
-- Індекси таблиці `Classification`
--
ALTER TABLE `Classification`
  ADD PRIMARY KEY (`id_classification`);

--
-- Індекси таблиці `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `Comment_ibfk_1` (`id_user`);

--
-- Індекси таблиці `Content`
--
ALTER TABLE `Content`
  ADD PRIMARY KEY (`id_content`),
  ADD KEY `Content_ibfk_1` (`id_post`),
  ADD KEY `Content_ibfk_2` (`id_kurs`),
  ADD KEY `Content_ibfk_3` (`id_access`);

--
-- Індекси таблиці `Img`
--
ALTER TABLE `Img`
  ADD PRIMARY KEY (`id_img`);

--
-- Індекси таблиці `Kurs`
--
ALTER TABLE `Kurs`
  ADD PRIMARY KEY (`id_kurs`),
  ADD KEY `Kurs_ibfk_1` (`id_user`),
  ADD KEY `Kurs_ibfk_2` (`id_access`),
  ADD KEY `Kurs_ibfk_3` (`id_img`),
  ADD KEY `Kurs_ibfk_4` (`id_main_page`);

--
-- Індекси таблиці `Kurs_Classification`
--
ALTER TABLE `Kurs_Classification`
  ADD PRIMARY KEY (`id_kurs_classification`),
  ADD KEY `Kurs_Classification_ibfk_1` (`id_classification`),
  ADD KEY `Kurs_Classification_ibfk_2` (`id_kurs`);

--
-- Індекси таблиці `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `Post_ibfk_4` (`id_test`),
  ADD KEY `Post_ibfk_3` (`id_img`),
  ADD KEY `Post_ibfk_2` (`id_access`),
  ADD KEY `Post_ibfk_1` (`id_user`);

--
-- Індекси таблиці `Post_Classification`
--
ALTER TABLE `Post_Classification`
  ADD PRIMARY KEY (`id_post_classification`),
  ADD KEY `Post_Classification_ibfk_1` (`id_classification`),
  ADD KEY `Post_Classification_ibfk_2` (`id_post`);

--
-- Індекси таблиці `Post_Comment`
--
ALTER TABLE `Post_Comment`
  ADD PRIMARY KEY (`id_post_comment`),
  ADD KEY `Post_Comment_ibfk_1` (`id_post`),
  ADD KEY `Post_Comment_ibfk_2` (`id_comment`);

--
-- Індекси таблиці `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`id_session`),
  ADD KEY `Session_ibfk_1` (`id_user`),
  ADD KEY `Session_ibfk_2` (`id_status`);

--
-- Індекси таблиці `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`id_status`);

--
-- Індекси таблиці `Status_user`
--
ALTER TABLE `Status_user`
  ADD PRIMARY KEY (`id_status_user`);

--
-- Індекси таблиці `Test`
--
ALTER TABLE `Test`
  ADD PRIMARY KEY (`id_test`),
  ADD KEY `Test_ibfk_1` (`id_user`);

--
-- Індекси таблиці `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `User_ibfk_1` (`id_status`),
  ADD KEY `User_ibfk_2` (`id_img`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `Access`
--
ALTER TABLE `Access`
  MODIFY `id_access` int(2) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id_comment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Content`
--
ALTER TABLE `Content`
  MODIFY `id_content` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Img`
--
ALTER TABLE `Img`
  MODIFY `id_img` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблиці `Kurs`
--
ALTER TABLE `Kurs`
  MODIFY `id_kurs` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Post`
--
ALTER TABLE `Post`
  MODIFY `id_post` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Post_Comment`
--
ALTER TABLE `Post_Comment`
  MODIFY `id_post_comment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Session`
--
ALTER TABLE `Session`
  MODIFY `id_session` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `Status`
--
ALTER TABLE `Status`
  MODIFY `id_status` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблиці `Status_user`
--
ALTER TABLE `Status_user`
  MODIFY `id_status_user` int(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблиці `Test`
--
ALTER TABLE `Test`
  MODIFY `id_test` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `User`
--
ALTER TABLE `User`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Content`
--
ALTER TABLE `Content`
  ADD CONSTRAINT `Content_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Content_ibfk_2` FOREIGN KEY (`id_kurs`) REFERENCES `Kurs` (`id_kurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Content_ibfk_3` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Kurs`
--
ALTER TABLE `Kurs`
  ADD CONSTRAINT `Kurs_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_2` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_3` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_4` FOREIGN KEY (`id_main_page`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Kurs_Classification`
--
ALTER TABLE `Kurs_Classification`
  ADD CONSTRAINT `Kurs_Classification_ibfk_1` FOREIGN KEY (`id_classification`) REFERENCES `Classification` (`id_classification`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_Classification_ibfk_2` FOREIGN KEY (`id_kurs`) REFERENCES `Kurs` (`id_kurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_2` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_3` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_4` FOREIGN KEY (`id_test`) REFERENCES `Test` (`id_test`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Post_Classification`
--
ALTER TABLE `Post_Classification`
  ADD CONSTRAINT `Post_Classification_ibfk_1` FOREIGN KEY (`id_classification`) REFERENCES `Classification` (`id_classification`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_Classification_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Post_Comment`
--
ALTER TABLE `Post_Comment`
  ADD CONSTRAINT `Post_Comment_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_Comment_ibfk_2` FOREIGN KEY (`id_comment`) REFERENCES `Comment` (`id_comment`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Session_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `Status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `Test`
--
ALTER TABLE `Test`
  ADD CONSTRAINT `Test_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `User_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `Status_user` (`id_status_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `User_ibfk_2` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
