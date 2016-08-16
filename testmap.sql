-- phpMyAdmin SQL Dump
-- version 4.6.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Авг 16 2016 г., 19:21
-- Версия сервера: 5.6.31-0ubuntu0.15.10.1
-- Версия PHP: 5.6.11-1ubuntu3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testmap`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bad_events`
--

CREATE TABLE `bad_events` (
  `event_id` int(11) NOT NULL,
  `event_text` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `event_art` varchar(255) NOT NULL,
  `gold_data` int(11) NOT NULL,
  `spirit_lvl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `bad_events`
--

INSERT INTO `bad_events` (`event_id`, `event_text`, `event_art`, `gold_data`, `spirit_lvl`) VALUES
(1, 'Что-то произошло.', '/Imagedata/BadEvents/Lizardmen.png', -100, -1),
(3, 'Ну и типо ещё что-то.', '/Imagedata/BadEvents/goblin.jpg', -30, -2),
(4, 'Типо все.', '/Imagedata/BadEvents/goblin.jpg', -301, -2);

-- --------------------------------------------------------

--
-- Структура таблицы `good_events`
--

CREATE TABLE `good_events` (
  `event_id` int(11) NOT NULL,
  `event_text` varchar(255) CHARACTER SET utf8 NOT NULL,
  `event_art` varchar(255) NOT NULL,
  `gold_data` int(11) NOT NULL,
  `spirit_lvl` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `good_events`
--

INSERT INTO `good_events` (`event_id`, `event_text`, `event_art`, `gold_data`, `spirit_lvl`) VALUES
(1, 'Что-то произошло.', '/Imagedata/GoodEvents/goblin.jpg', 100, -1),
(2, 'И ещё что-то.', '/Imagedata/BadEvents/Lizardmen.png', 5, 1),
(3, 'И ещё что-то вот.', '/Imagedata/BadEvents/Lizardmen.png', -10, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bad_events`
--
ALTER TABLE `bad_events`
  ADD PRIMARY KEY (`event_id`);

--
-- Индексы таблицы `good_events`
--
ALTER TABLE `good_events`
  ADD PRIMARY KEY (`event_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bad_events`
--
ALTER TABLE `bad_events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `good_events`
--
ALTER TABLE `good_events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
