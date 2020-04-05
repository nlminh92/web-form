-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2020 at 06:41 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `university`
--

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `name`, `code`) VALUES
(1, 'Ngành Kỹ thuật cơ khí động lực', '7520116'),
(2, 'Ngành Kỹ thuật Cơ điện tử', '7520114'),
(3, 'Ngành Kỹ thuật ô tô', '7520130'),
(4, 'Ngành Kỹ thuật điện', '7520201'),
(5, 'Ngành Kỹ thuật điện tử - viễn thông ', '7520207'),
(6, 'Ngành Kỹ thuật điều khiển và tự động hoá', '7520216');

-- --------------------------------------------------------

--
-- Table structure for table `combination`
--

CREATE TABLE `combination` (
  `id` int(25) NOT NULL,
  `name` varchar(150) CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `combination`
--

INSERT INTO `combination` (`id`, `name`) VALUES
(1, 'A00'),
(2, 'A01'),
(3, 'D01'),
(4, 'D07'),
(5, 'C01'),
(6, 'V00'),
(7, 'V01');

-- --------------------------------------------------------

--
-- Table structure for table `curriculum_vitaes`
--

CREATE TABLE `curriculum_vitaes` (
  `id` int(12) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `place_of_birth` int(11) DEFAULT 1,
  `address` varchar(255) DEFAULT NULL,
  `mobilephone` varchar(16) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `grade_ten` varchar(255) DEFAULT NULL,
  `grade_ten_province_code` varchar(3) DEFAULT NULL,
  `identity_card` varchar(12) DEFAULT NULL,
  `grade_ten_school_code` varchar(3) DEFAULT NULL,
  `grade_eleven` varchar(255) DEFAULT NULL,
  `grade_eleven_province_code` varchar(3) DEFAULT NULL,
  `grade_eleven_school_code` varchar(3) DEFAULT NULL,
  `grade_twelve` varchar(255) DEFAULT NULL,
  `grade_twelve_province_code` varchar(3) DEFAULT NULL,
  `grade_twelve_school_code` varchar(3) DEFAULT NULL,
  `graduate_year` varchar(4) DEFAULT NULL,
  `area` varchar(4) DEFAULT NULL,
  `priority` varchar(4) DEFAULT NULL,
  `fixture` date DEFAULT NULL,
  `registration_number` varchar(255) DEFAULT NULL,
  `point` varchar(4) NOT NULL,
  `career_1` bigint(20) DEFAULT NULL,
  `career_2` bigint(20) DEFAULT NULL,
  `career_3` bigint(20) DEFAULT NULL,
  `career_4` bigint(20) DEFAULT NULL,
  `typee` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `session_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `identity_card_address` varchar(255) DEFAULT NULL,
  `identity_card_date` date DEFAULT NULL,
  `province_code` int(25) DEFAULT NULL,
  `district_code` int(25) DEFAULT NULL,
  `village_code` int(25) DEFAULT NULL,
  `permanent_residence` varchar(255) DEFAULT NULL,
  `career_form_1` int(20) DEFAULT NULL,
  `career_form_2` bigint(20) DEFAULT NULL,
  `career_form_3` bigint(20) DEFAULT NULL,
  `career_form_4` bigint(20) DEFAULT NULL,
  `career_form_5` bigint(20) DEFAULT NULL,
  `career_form_6` bigint(20) DEFAULT NULL,
  `career_form_7` bigint(20) DEFAULT NULL,
  `career_form_8` bigint(20) DEFAULT NULL,
  `career_form_9` bigint(20) DEFAULT NULL,
  `career_form_10` bigint(20) DEFAULT NULL,
  `combination1` int(11) DEFAULT NULL,
  `combination2` varchar(255) DEFAULT NULL,
  `combination3` varchar(255) DEFAULT NULL,
  `combination4` varchar(255) DEFAULT NULL,
  `combination5` varchar(255) DEFAULT NULL,
  `combination6` varchar(255) DEFAULT NULL,
  `combination7` varchar(255) DEFAULT NULL,
  `combination8` varchar(255) DEFAULT NULL,
  `combination9` varchar(255) DEFAULT NULL,
  `combination10` varchar(255) DEFAULT NULL,
  `diemtb11` varchar(4) DEFAULT NULL,
  `diemtb12` varchar(4) DEFAULT NULL,
  `diemtb13` varchar(4) DEFAULT NULL,
  `diemtb21` varchar(4) DEFAULT NULL,
  `diemtb22` varchar(4) DEFAULT NULL,
  `diemtb23` varchar(4) DEFAULT NULL,
  `diemtb31` varchar(4) DEFAULT NULL,
  `diemtb32` varchar(4) DEFAULT NULL,
  `diemtb33` varchar(4) DEFAULT NULL,
  `diemtb41` varchar(4) DEFAULT NULL,
  `diemtb42` varchar(4) DEFAULT NULL,
  `diemtb43` varchar(4) DEFAULT NULL,
  `diemtb51` varchar(4) DEFAULT NULL,
  `diemtb52` varchar(4) DEFAULT NULL,
  `diemtb53` varchar(4) DEFAULT NULL,
  `diemtb61` varchar(4) DEFAULT NULL,
  `diemtb62` varchar(4) DEFAULT NULL,
  `diemtb63` varchar(4) DEFAULT NULL,
  `diemtb71` varchar(4) DEFAULT NULL,
  `diemtb72` varchar(4) DEFAULT NULL,
  `diemtb73` varchar(4) DEFAULT NULL,
  `diemtb81` varchar(4) DEFAULT NULL,
  `diemtb82` varchar(4) DEFAULT NULL,
  `diemtb83` varchar(4) DEFAULT NULL,
  `diemtb91` varchar(4) DEFAULT NULL,
  `diemtb92` varchar(4) DEFAULT NULL,
  `diemtb93` varchar(4) DEFAULT NULL,
  `diemtb101` varchar(4) DEFAULT NULL,
  `diemtb102` varchar(4) DEFAULT NULL,
  `diemtb103` varchar(4) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `place_of_birth2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `curriculum_vitaes`
--

INSERT INTO `curriculum_vitaes` (`id`, `name`, `gender`, `birthday`, `place_of_birth`, `address`, `mobilephone`, `email`, `grade_ten`, `grade_ten_province_code`, `identity_card`, `grade_ten_school_code`, `grade_eleven`, `grade_eleven_province_code`, `grade_eleven_school_code`, `grade_twelve`, `grade_twelve_province_code`, `grade_twelve_school_code`, `graduate_year`, `area`, `priority`, `fixture`, `registration_number`, `point`, `career_1`, `career_2`, `career_3`, `career_4`, `typee`, `code`, `session_id`, `created_at`, `updated_at`, `nation`, `identity_card_address`, `identity_card_date`, `province_code`, `district_code`, `village_code`, `permanent_residence`, `career_form_1`, `career_form_2`, `career_form_3`, `career_form_4`, `career_form_5`, `career_form_6`, `career_form_7`, `career_form_8`, `career_form_9`, `career_form_10`, `combination1`, `combination2`, `combination3`, `combination4`, `combination5`, `combination6`, `combination7`, `combination8`, `combination9`, `combination10`, `diemtb11`, `diemtb12`, `diemtb13`, `diemtb21`, `diemtb22`, `diemtb23`, `diemtb31`, `diemtb32`, `diemtb33`, `diemtb41`, `diemtb42`, `diemtb43`, `diemtb51`, `diemtb52`, `diemtb53`, `diemtb61`, `diemtb62`, `diemtb63`, `diemtb71`, `diemtb72`, `diemtb73`, `diemtb81`, `diemtb82`, `diemtb83`, `diemtb91`, `diemtb92`, `diemtb93`, `diemtb101`, `diemtb102`, `diemtb103`, `image`, `place_of_birth2`) VALUES
(152, 'form3', 'female', '2020-04-01', NULL, 'abc123', '0123456', 'abc@gmail.com', NULL, NULL, '123214347', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, 3, '00001', 4, '2020-04-03 16:23:01', '2020-04-03 16:23:01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(153, 'form3', 'female', '2020-04-02', NULL, '1', '1', 'test@gmail.com', NULL, NULL, '98076757841', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, 3, '00002', 4, '2020-04-03 16:26:59', '2020-04-03 16:26:59', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(154, 'form1', 'male', '2020-04-03', 4, '1', '65564656', 'vb@gmail.com', '1', '1', '90809879070', '1', '1', '1', '1', '1', '1', '1', '2004', '2', NULL, '2020-04-02', '121a', '10', 3, NULL, NULL, NULL, 1, '00003', 4, '2020-04-04 14:38:01', '2020-04-04 14:38:01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(155, 'form2', 'female', '2020-04-03', 2, '1', '6987965876', 'v@gmail.com', '1', '1', '86970709', '1', '2', '2', '2', '33', '3', '3', NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, 2, '00004', 4, '2020-04-04 14:39:30', '2020-04-04 14:39:30', 'Kinh', 'f', '2020-04-01', 1, 1, 1, '1', 15, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', '1', '1', '2', '2', '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(156, 'form2', 'female', '2020-04-02', 3, '299 Câu Giay, Ba Dinh, Ha Noi', '0931385571', 'nguyenleminh.paris13@gmail.com', 'THPT Nguyen Van A', '1', '21543654656', '12', 'THPT Nguyen Van B', '2', '34', 'THPT Nguyen Van C', '3', '56', NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, 2, '00005', 4, '2020-04-04 16:13:58', '2020-04-04 16:13:58', 'Kinh', 'Ha Noi', '2020-04-01', 1, 12, 123, 'Ha Noi', 1, 2, 3, 4, 5, 6, 7, 9, 8, 14, 1, '2', '3', '4', '5', '6', '7', '2', '1', '4', '1', '1.5', '1.6', '2', '2.5', '2.6', '3', '3.5', '3.6', '4', '4.5', '4.6', '5', '5.5', '5.6', '6', '6.5', '6.5', '7', '7.5', '7.6', '8', '8.5', '8.6', '9', '9.5', '9.6', '3.4', '4.7', '5.9', NULL, NULL),
(157, 'form2', 'female', '2020-04-01', 4, '65646', '76576576575', 'nguyenleminh.paris13@gmail.com', '1', '1', '123456479777', '1', '1', '1', '1', '1', '1', '1', NULL, '2NT', '2', NULL, NULL, '', NULL, NULL, NULL, NULL, 2, '00006', 4, '2020-04-05 03:40:08', '2020-04-05 03:40:08', 'Kinh', 'Thanh Hoa', '2020-04-01', 1, 1, 1, '432432', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', '1', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(158, 'form2', 'female', '2020-04-01', 4, '65646', '76576576575', 'nguyenleminh.paris13@gmail.com', '1', '1', '123456479778', '1', '1', '1', '1', '1', '1', '1', '2001', '2NT', '2', NULL, NULL, '', NULL, NULL, NULL, NULL, 2, '00007', 4, '2020-04-05 03:41:59', '2020-04-05 03:41:59', 'Kinh', 'Thanh Hoa', '2020-04-01', 1, 1, 1, '432432', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', '1', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(159, 'form1', 'male', '2020-04-03', 0, '1', '1', 'nguyenleminh@gmail.com', '1', '1', '987987987997', '1', '1', '1', '1', '1', '1', '1', '1992', '3', NULL, '2020-04-02', '343', '2', 2, NULL, NULL, NULL, 1, '00008', 4, '2020-04-05 03:46:01', '2020-04-05 03:46:01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(160, 'form1', 'female', '2020-04-01', 1, '1', '1', 'n@gmail.com', '1', '1', '7568786', '1', '1', '1', '1', '1', '1', '1', '1', '2', NULL, '2020-04-02', '463636', '1', 3, NULL, NULL, NULL, 1, '00009', 4, '2020-04-05 04:38:09', '2020-04-05 04:38:09', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Yen Bai');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `typee` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `typee`, `code`) VALUES
(1, 'Hà Nội', NULL, '101'),
(2, 'Hải Phòng', NULL, '103'),
(3, 'Vĩnh Phúc', NULL, '104'),
(4, 'Bắc Ninh', NULL, '106'),
(5, 'Hải Dương', NULL, '107'),
(6, 'Hưng Yên', NULL, '109'),
(7, 'Hà Nam', NULL, '111'),
(8, 'Nam Định', NULL, '113'),
(9, 'Thái Bình', NULL, '115'),
(10, 'Ninh Bình', NULL, '117'),
(11, 'Hà Giang', NULL, '201'),
(12, 'Cao Bằng', NULL, '203'),
(13, 'Lào Cai', NULL, '205'),
(14, 'Bắc Kạn', NULL, '207'),
(15, 'Lạng Sơn', NULL, '209'),
(16, 'Tuyên Quang', NULL, '211'),
(17, 'Yên Bái', NULL, '213'),
(18, 'Thái Nguyên', NULL, '215'),
(19, 'Phú Thọ', NULL, '217'),
(20, 'Bắc Giang', NULL, '221'),
(21, 'Quảng Ninh', NULL, '225'),
(22, 'Lai Châu', NULL, '301'),
(23, 'Điện Biên', NULL, '302'),
(24, 'Sơn La', NULL, '303'),
(25, 'Hoà Bình', NULL, '305'),
(26, 'Thanh Hóa', NULL, '401'),
(27, 'Nghệ An', NULL, '403'),
(28, 'Hà Tĩnh', NULL, '405'),
(29, 'Quảng Bình', NULL, '407'),
(30, 'Quảng Trị', NULL, '409'),
(31, 'Thừa Thiên Huế', NULL, '411'),
(32, 'Đà Nẵng', NULL, '501'),
(33, 'Quảng Nam', NULL, '503'),
(34, 'Quảng Ngãi', NULL, '505'),
(35, 'Bình Định', NULL, '507'),
(36, 'Phú Yên', NULL, '509'),
(37, 'Khánh Hòa', NULL, '511'),
(38, 'Kon Tum', NULL, '601'),
(39, 'Gia Lai', NULL, '603'),
(40, 'Đắk Lắk', NULL, '605'),
(41, 'Đắk Nông', NULL, '606'),
(42, 'Lâm Đồng', NULL, '607'),
(43, 'Thành phố Hồ Chí Minh', NULL, '701'),
(44, 'Ninh Thuận', NULL, '705'),
(45, 'Bình Phước', NULL, '707'),
(46, 'Tây Ninh', NULL, '709'),
(47, 'Bình Dương', NULL, '711'),
(48, 'Đồng Nai', NULL, '713'),
(49, 'Bình Thuận', NULL, '715'),
(50, 'Bà Rịa - Vũng Tàu', NULL, '717'),
(51, 'Long An', NULL, '801'),
(52, 'Đồng Tháp', NULL, '803'),
(53, 'An Giang', NULL, '805'),
(54, 'Tiền Giang', NULL, '807'),
(55, 'Vĩnh Long', NULL, '809'),
(56, 'Bến Tre', NULL, '811'),
(57, 'Kiên Giang', NULL, '813'),
(58, 'Cần Thơ', NULL, '815'),
(59, 'Hậu Giang', NULL, '816'),
(60, 'Trà Vinh', NULL, '817'),
(61, 'Sóc Trăng', NULL, '819'),
(62, 'Bạc Liêu', NULL, '821'),
(63, 'Cà Mau', NULL, '823');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `from_time` datetime NOT NULL,
  `to_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `name`, `from_time`, `to_time`) VALUES
(3, 'test', '2020-12-01 04:11:00', '2020-12-11 17:12:00'),
(4, 'test 2', '2020-03-08 03:00:00', '2020-06-30 05:12:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `encrypted_password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `encrypted_password`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin', '$2b$05$ej8AvnKqydv29zfb5WBEleLzGsgir6B05fuO/zWZLcDPoPoFAwu/6', '2020-03-08 20:28:11', '2020-03-08 20:28:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `combination`
--
ALTER TABLE `combination`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `curriculum_vitaes`
--
ALTER TABLE `curriculum_vitaes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `combination`
--
ALTER TABLE `combination`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `curriculum_vitaes`
--
ALTER TABLE `curriculum_vitaes`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
