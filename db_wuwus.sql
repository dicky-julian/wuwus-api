-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Agu 2020 pada 15.00
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_wuwus`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_chat`
--

CREATE TABLE `tb_chat` (
  `id` int(11) NOT NULL,
  `id_room` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` varchar(11) DEFAULT NULL,
  `message` mediumtext DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_chat`
--

INSERT INTO `tb_chat` (`id`, `id_room`, `id_user`, `type`, `message`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'text', 'Malam, mimpi indah', '2020-07-28 17:02:52', '2020-07-28 17:02:52'),
(2, 1, 2, 'text', 'Malam, mimpi indah juga', '2020-07-28 17:07:42', '2020-07-28 17:07:42'),
(3, 1, 1, 'text', 'Pagi Cheryl', '2020-07-29 23:58:17', '2020-07-29 23:58:17'),
(4, 1, 2, 'text', 'Pagi Dicky', '2020-07-30 01:46:30', '2020-07-30 01:46:30'),
(5, 1, 1, 'text', 'Gowes skuyy ...', '2020-07-30 01:47:16', '2020-07-30 01:47:16'),
(6, 1, 1, 'text', 'Gowes skuyy ...', '2020-07-30 01:49:14', '2020-07-30 01:49:14'),
(7, 1, 1, 'text', 'Gowes skuyy ...', '2020-07-30 01:49:59', '2020-07-30 01:49:59'),
(8, 1, 1, 'text', 'Gowes skuyy ...', '2020-07-30 01:50:20', '2020-07-30 01:50:20'),
(9, 1, 2, 'text', 'kemana bang ...', '2020-07-30 02:28:27', '2020-07-30 02:28:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_room`
--

CREATE TABLE `tb_room` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `user1` int(11) NOT NULL,
  `user2` int(11) NOT NULL,
  `id_chat` int(11) DEFAULT NULL,
  `last_chat` mediumtext DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_room`
--

INSERT INTO `tb_room` (`id`, `status`, `user1`, `user2`, `id_chat`, `last_chat`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 2, 9, 'kemana bang ...', '2020-07-28 16:23:08', '2020-07-28 16:23:08'),
(5, 1, 2, 3, NULL, NULL, '2020-07-30 05:14:59', '2020-07-30 05:14:59'),
(6, 1, 2, 6, NULL, NULL, '2020-07-30 20:12:43', '2020-07-30 20:12:43'),
(7, 1, 2, 7, NULL, NULL, '2020-07-30 20:41:13', '2020-07-30 20:41:13'),
(8, 1, 2, 4, NULL, NULL, '2020-07-30 21:05:28', '2020-07-30 21:05:28'),
(10, 1, 2, 5, NULL, NULL, '2020-07-30 21:27:35', '2020-07-30 21:27:35'),
(16, 1, 1, 5, NULL, NULL, '2020-08-01 04:25:19', '2020-08-01 04:25:19'),
(24, 1, 1, 4, NULL, NULL, '2020-08-01 10:53:23', '2020-08-01 10:53:23'),
(25, 1, 1, 6, NULL, NULL, '2020-08-01 10:58:05', '2020-08-01 10:58:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `code_user` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_user`
--

INSERT INTO `tb_user` (`id`, `fullname`, `username`, `password`, `image`, `status`, `location`, `code_user`, `created_at`, `updated_at`) VALUES
(1, 'Dicky Julian', 'dicky', '$2b$10$.x4Eb/mpelLSFY8TcCIJ6OnIeQyiy0mtnneO9B9qC3RFEl5MnvZOy', NULL, 'Busy ~ Chat only !!!', '-7.995580960996449,112.61464431881905', 'dicky1595940950951', '2020-07-28 12:55:51', '2020-07-28 12:55:51'),
(2, 'Cheryl Gloria', 'cheryl', '$2b$10$ESB19MX12CgoaDFkTsAuD.OH.5y942vK6OKYBLPSPDKUYrB/R0umW', NULL, 'Busy ~ Chat only !!!', NULL, 'cheryl1595953158659', '2020-07-28 16:19:18', '2020-07-28 16:19:18'),
(3, 'Erina Krisnawati', 'Erina', '$2b$10$WGHAuLirOlPXPqD6r3NOAunmR2n2ltLFl6Dzc7M4paWmVIzNFr4VW', NULL, NULL, NULL, 'Erina1596031363396', '2020-07-29 14:02:43', '2020-07-29 14:02:43'),
(4, 'Nabila Rahmadanti', 'Nabila', '$2b$10$qnq32hlLnVbNEnh9RbuFIuGVv5vu2.Aeqih0e2m2g2PT1WwpbJ64K', NULL, NULL, NULL, 'Nabila1596031471602', '2020-07-29 14:04:31', '2020-07-29 14:04:31'),
(5, 'Yaya Toure', 'Yaya', '$2b$10$6.h7w/CBtTy/SfyOiIEPO.zeuiYbdih4aoRjbsdxge0b73ujcUZEK', NULL, NULL, NULL, 'Yaya1596031955895', '2020-07-29 14:12:35', '2020-07-29 14:12:35'),
(6, 'Pandawa Cahya', 'Pandawa', '$2b$10$PQzYcx/bc2dOfKYnuk8xdudsazWygOg5OZGQBmbdfbilSSURyo87G', NULL, NULL, '-7.995532597415149,112.61460240930319', 'Pandawa1596081156541', '2020-07-30 03:52:36', '2020-07-30 03:52:36'),
(7, 'Amin', 'amin', '$2b$10$Vcaw/yZK3OWnb/g3LFfcTuGJc6Ynk5VmhDxYBVNL82FO2NhS/ebuG', NULL, NULL, NULL, 'amin1596081226321', '2020-07-30 03:53:46', '2020-07-30 03:53:46');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_chat`
--
ALTER TABLE `tb_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_room`
--
ALTER TABLE `tb_room`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_chat`
--
ALTER TABLE `tb_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `tb_room`
--
ALTER TABLE `tb_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
