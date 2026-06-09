-- 摇一摇抓大鹅 - 数据库初始化SQL
-- 数据库: goose_game

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

DROP DATABASE IF EXISTS goose_game;
CREATE DATABASE IF NOT EXISTS goose_game DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE goose_game;

-- 关卡配置表
CREATE TABLE IF NOT EXISTS `level_config` (
  `levelNo` INT NOT NULL COMMENT '关卡编号',
  `itemTypeList` JSON NOT NULL COMMENT '食材类型数组，如["apple","banana","orange"]',
  `itemTotal` INT NOT NULL COMMENT '本关食材总数',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`levelNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='关卡配置表';

-- 玩家存档表
CREATE TABLE IF NOT EXISTS `user_record` (
  `openid` VARCHAR(64) NOT NULL COMMENT '微信唯一标识',
  `maxLevel` INT NOT NULL DEFAULT 0 COMMENT '已通关最高关卡',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`openid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='玩家存档表';

-- 食材资源配置表
CREATE TABLE IF NOT EXISTS `item_info` (
  `itemKey` VARCHAR(64) NOT NULL COMMENT '食材唯一ID',
  `resPath` VARCHAR(255) NOT NULL COMMENT '模型资源地址',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`itemKey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='食材资源配置表';

-- 插入示例关卡数据
INSERT INTO `level_config` (`levelNo`, `itemTypeList`, `itemTotal`) VALUES
(1, '["apple","banana","orange"]', 12),
(2, '["apple","banana","orange","grape"]', 18),
(3, '["apple","banana","orange","grape","peach"]', 24);

-- 插入示例食材数据
INSERT INTO `item_info` (`itemKey`, `resPath`) VALUES
('apple', '/models/apple.glb'),
('banana', '/models/banana.glb'),
('orange', '/models/orange.glb'),
('grape', '/models/grape.glb'),
('peach', '/models/peach.glb');