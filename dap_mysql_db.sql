

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `dap_mysql_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dap_mysql_db`;

--
-- Table structure for table `dap_employees`
--

CREATE TABLE `dap_employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `is_deleted` tinyint(3) UNSIGNED DEFAULT 0,
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `dap_employees` (`id`, `first_name`, `last_name`, `designation`, `created_at`, `is_deleted`, `updated_at`) VALUES
(1, 'Margaret', 'Yebei', 'Project Manager', '2021-08-30 21:25:08', 0, '2021-08-30 22:25:47'),
(2, 'Sarah', 'Towett', 'Systems Analyst', '2021-08-30 21:26:09', 0, '2021-08-30 22:26:30');

ALTER TABLE `dap_employees`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `dap_employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
