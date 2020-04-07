-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 23 Sty 2020, 23:42
-- Wersja serwera: 10.4.10-MariaDB
-- Wersja PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Kurs`
--

CREATE TABLE `Kurs` (
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_access` int(10) UNSIGNED NOT NULL,
  `id_main_page` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Kurs`
--

-- INSERT INTO `Kurs` (`id_post`, `id_user`, `title`, `datetime`, `classification`, `description`, `post_full_image`, `access`, `content`) VALUES
-- (15, 1, 'Baza danych kolos', '2020-01-21', 'bd', 'Przygotowania do kolosu access: 66', 'img/standard/f', '66', 'md/BD/K2.md');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Content`
--

CREATE TABLE `Content` (
  `id_content` int(10) UNSIGNED NOT NULL,
  `description` varchar(255),
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_access` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Post`
--

CREATE TABLE `Post` (
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_access` int(10) UNSIGNED NOT NULL,
  `id_test` int(10) UNSIGNED,
  `content` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Post`
--

-- INSERT INTO `Post` (`id_post`, `id_user`, `title`, `datetime`, `classification`, `description`, `post_full_image`, `access`, `content`) VALUES
-- (5, 1, 'Baza Danych', '2020-01-18', 'bd', 'Bazy Dannych laboratorium numer 10 access: 61', 'img/standard/f', '61', 'md/BD/Lab10.md'),
-- (11, 1, 'RAID', '2020-01-21', 'bsi', 'Notatki z wykładu dnia 21 access: 64', 'img/standard/f', '64', 'md/BSI/wyk/21,01.md'),
-- (15, 1, 'Baza danych kolos', '2020-01-21', 'bd', 'Przygotowania do kolosu access: 66', 'img/standard/f', '66', 'md/BD/K2.md');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Test`
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
-- Struktura tabeli dla tabeli `Img`
--

CREATE TABLE `Img` (
  `id_img` int(10) UNSIGNED NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Access`
--

CREATE TABLE `Access` (
  `id_access` int(10) UNSIGNED NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Session`
--

CREATE TABLE `Session` (
  `id_session` varchar(100) NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_status` int(10) UNSIGNED NOT NULL,
  `lastUpdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Status_user`
--

CREATE TABLE `Status_user` (
  `id_status_user` int(10) UNSIGNED NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Status`
--

CREATE TABLE `Status` (
  `id_status` int(10) UNSIGNED NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Classification`
--

CREATE TABLE `Classification` (
  `id_classification` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Post_Classification`
--

CREATE TABLE `Post_Classification` (
  `id_post_classification` int(10) UNSIGNED NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_classification` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Kurs_Classification`
--

CREATE TABLE `Kurs_Classification` (
  `id_kurs_classification` int(10) UNSIGNED NOT NULL,
  `id_kurs` int(10) UNSIGNED NOT NULL,
  `id_classification` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `User`
--

CREATE TABLE `User` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `id_img` int(10) UNSIGNED NOT NULL,
  `id_status` int(10) UNSIGNED NOT NULL,
  `ip_addres` varchar(15) NOT NULL,
  `passwd` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `User`
--

-- INSERT INTO `User` (`id_user`, `username`, `email`, `date`, `img`, `status`, `passwd`) VALUES
-- (1, 'Borys', 'mushkaborys@gmail.com', '2020-01-23', 'img/mf.jpg', 1, 'c4ca4238a0b923820dcc509a6f75849b'),
-- (8, 'Test 4', 't4@mail.com', '2020-01-18', 'img/map.jpg', 1, 'd41d8cd98f00b204e9800998ecf8427e'),
-- (15, 'admin', 'admin@admin.com', '2020-01-20', 'img/admin.png', 0, '21232f297a57a5a743894a0e4a801fc3');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Comment`
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
-- Struktura tabeli dla tabeli `Post_Comment`
--

CREATE TABLE `Post_Comment` (
  `id_post_comment` int(10) UNSIGNED NOT NULL,
  `id_post` int(10) UNSIGNED NOT NULL,
  `id_comment` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `Post_ibfk_4` (`id_test`),
  ADD KEY `Post_ibfk_3` (`id_img`),
  ADD KEY `Post_ibfk_2` (`id_access`),
  ADD KEY `Post_ibfk_1` (`id_user`);

--
-- Indeksy dla tabeli `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`id_session`),
  ADD KEY `Session_ibfk_1` (`id_user`),
  ADD KEY `Session_ibfk_2` (`id_status`);

--
-- Indeksy dla tabeli `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `User_ibfk_1` (`id_status`),
  ADD KEY `User_ibfk_2` (`id_img`);

--
-- Indeksy dla tabeli `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `Comment_ibfk_1` (`id_user`);

--
-- Indeksy dla tabeli `Post_Comment`
--
ALTER TABLE `Post_Comment`
  ADD PRIMARY KEY (`id_post_comment`),
  ADD KEY `Post_Comment_ibfk_1` (`id_post`),
  ADD KEY `Post_Comment_ibfk_2` (`id_comment`);

--
-- Indeksy dla tabeli `Test`
--
ALTER TABLE `Test`
  ADD PRIMARY KEY (`id_test`),
  ADD KEY `Test_ibfk_1` (`id_user`);

--
-- Indeksy dla tabeli `Img`
--
ALTER TABLE `Img`
  ADD PRIMARY KEY (`id_img`);

--
-- Indeksy dla tabeli `Access`
--
ALTER TABLE `Access`
  ADD PRIMARY KEY (`id_access`);

--
-- Indeksy dla tabeli `Kurs`
--
ALTER TABLE `Kurs`
  ADD PRIMARY KEY (`id_kurs`),
  ADD KEY `Kurs_ibfk_1` (`id_user`),
  ADD KEY `Kurs_ibfk_2` (`id_access`),
  ADD KEY `Kurs_ibfk_3` (`id_img`),
  ADD KEY `Kurs_ibfk_4` (`id_main_page`);

--
-- Indeksy dla tabeli `Content`
--
ALTER TABLE `Content`
  ADD PRIMARY KEY (`id_content`),
  ADD KEY `Content_ibfk_1` (`id_post`),
  ADD KEY `Content_ibfk_2` (`id_kurs`),
  ADD KEY `Content_ibfk_3` (`id_access`);

--
-- Indeksy dla tabeli `Classification`
--
ALTER TABLE `Classification`
  ADD PRIMARY KEY (`id_classification`);

--
-- Indeksy dla tabeli `Post_Classification`
--
ALTER TABLE `Post_Classification`
  ADD PRIMARY KEY (`id_post_classification`),
  ADD KEY `Post_Classification_ibfk_1` (`id_classification`),
  ADD KEY `Post_Classification_ibfk_2` (`id_post`);

--
-- Indeksy dla tabeli `Kurs_Classification`
--
ALTER TABLE `Kurs_Classification`
  ADD PRIMARY KEY (`id_kurs_classification`),
  ADD KEY `Kurs_Classification_ibfk_1` (`id_classification`),
  ADD KEY `Kurs_Classification_ibfk_2` (`id_kurs`);

--
-- Indeksy dla tabeli `Status`
--
ALTER TABLE `Status`
  ADD PRIMARY KEY (`id_status`);

--
-- Indeksy dla tabeli `Status_user`
--
ALTER TABLE `Status_user`
  ADD PRIMARY KEY (`id_status_user`);

--
-- AUTO_INCREMENT dla tabel zrzutów
--

--
-- AUTO_INCREMENT dla tabeli `Post`
--
ALTER TABLE `Post`
  MODIFY `id_post` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `User`
--
ALTER TABLE `User`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id_comment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Post_Comment`
--
ALTER TABLE `Post_Comment`
  MODIFY `id_post_comment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Kurs`
--
ALTER TABLE `Kurs`
  MODIFY `id_kurs` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Content`
--
ALTER TABLE `Content`
  MODIFY `id_content` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Status`
--
ALTER TABLE `Status`
  MODIFY `id_status` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Status_user`
--
ALTER TABLE `Status_user`
  MODIFY `id_status_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Test`
--
ALTER TABLE `Test`
  MODIFY `id_test` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Img`
--
ALTER TABLE `Img`
  MODIFY `id_img` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT dla tabeli `Access`
--
ALTER TABLE `Access`
  MODIFY `id_access` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `User_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `Status_user` (`id_status_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `User_ibfk_2` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Post_Comment`
--
ALTER TABLE `Post_Comment`
  ADD CONSTRAINT `Post_Comment_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_Comment_ibfk_2` FOREIGN KEY (`id_comment`) REFERENCES `Comment` (`id_comment`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Kurs`
--
ALTER TABLE `Kurs`
  ADD CONSTRAINT `Kurs_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_2` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_3` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_ibfk_4` FOREIGN KEY (`id_main_page`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Content`
--
ALTER TABLE `Content`
  ADD CONSTRAINT `Content_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Content_ibfk_2` FOREIGN KEY (`id_kurs`) REFERENCES `Kurs` (`id_kurs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Content_ibfk_3` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_2` FOREIGN KEY (`id_access`) REFERENCES `Access` (`id_access`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_3` FOREIGN KEY (`id_img`) REFERENCES `Img` (`id_img`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_ibfk_4` FOREIGN KEY (`id_test`) REFERENCES `Test` (`id_test`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Post_Classification`
--
ALTER TABLE `Post_Classification`
  ADD CONSTRAINT `Post_Classification_ibfk_1` FOREIGN KEY (`id_classification`) REFERENCES `Classification` (`id_classification`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Post_Classification_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `Post` (`id_post`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Kurs_Classification`
--
ALTER TABLE `Kurs_Classification`
  ADD CONSTRAINT `Kurs_Classification_ibfk_1` FOREIGN KEY (`id_classification`) REFERENCES `Classification` (`id_classification`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Kurs_Classification_ibfk_2` FOREIGN KEY (`id_kurs`) REFERENCES `Kurs` (`id_kurs`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Test`
--
ALTER TABLE `Test`
  ADD CONSTRAINT `Test_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `User` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Session_ibfk_2` FOREIGN KEY (`id_status`) REFERENCES `Status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
