/*
 Navicat Premium Data Transfer

 Source Server         : 1
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : fandianlo

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 31/12/2023 22:06:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dishes
-- ----------------------------
DROP TABLE IF EXISTS `dishes`;
CREATE TABLE `dishes` (
  `dishes_id` int NOT NULL AUTO_INCREMENT,
  `dishes_name` varchar(255) DEFAULT NULL,
  `dishes_photo` varchar(1024) DEFAULT NULL,
  `dishes_price` double DEFAULT NULL,
  `dishes_ingredient` varchar(1024) DEFAULT NULL,
  `dishes_num` varchar(255) DEFAULT NULL,
  `dishes_floor` varchar(255) DEFAULT NULL,
  `dishes_shop` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dishes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of dishes
-- ----------------------------
BEGIN;
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (1, '刀削面', 'https://img.zgxledu.com/UpFiles/gp/1000/201911/02/174910939297.jpg', 12, '刀削面', '2', '2', '1');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (2, '拉面', 'https://pic.rmb.bdstatic.com/bjh/down/8541cad2707dcf39d829875b41973dd5.jpeg', 12, '拉面', '2', '2', '1');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (3, '牛肉刀削面', 'https://p4.itc.cn/images01/20210309/84374617e21b405ca9de5264b4d558ad.jpeg', 15, '牛肉刀削面', '2', '2', '1');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (4, '茄汁拌面', 'https://inews.gtimg.com/newsapp_bt/0/12630911918/1000', 13, '茄汁拌面', '2', '3', '2');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (5, '岐山哨子面', 'https://imgsa.baidu.com/baike/pic/item/6159252dd42a2834fc2e7e4355b5c9ea14cebfea.jpg', 15, '岐山哨子面', '2', '3', '2');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (6, '肉夹馍', 'https://img0.baidu.com/it/u=3545730866,2993293524&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=460', 10, '肉夹馍', '2', '3', '2');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (7, '米饭', 'https://bbtcafe.com/wp-content/uploads/2021/01/rice.jpg', 1, '米饭', '1', '1', '3');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (8, '青菜', 'https://img95.699pic.com/photo/50049/9073.jpg_wh300.jpg', 2, '青菜', '1', '1', '3');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (9, '鸡腿', 'https://picx.zhimg.com/v2-52c086f6db34f95cfa14bd27aeb08f50_720w.jpg?source=172ae18b', 5, '鸡腿', '1', '1', '3');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (10, '双皮奶', 'https://img0.baidu.com/it/u=726949388,1566123287&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750', 5, '双皮奶', '2', '1', '4');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (11, '肉松面包', 'https://img1.baidu.com/it/u=1170108228,749047299&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666', 8, '肉松面包', '2', '1', '4');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (12, '三明治', 'https://static.xinshipu.com/20130807/original/1375859802172.jpg', 8, '三明治', '2', '1', '4');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (13, '牛肉石锅拌饭', 'https://p3.ssl.qhimgs3.com/t01ad60162ca7ed67c1.jpg', 15, '牛肉石锅拌饭', '1', '2', '5');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (14, '鸡肉石锅拌饭', 'https://p3.ssl.qhimgs3.com/t01ad60162ca7ed67c1.jpg', 15, '鸡肉石锅拌饭', '1', '2', '5');
INSERT INTO `dishes` (`dishes_id`, `dishes_name`, `dishes_photo`, `dishes_price`, `dishes_ingredient`, `dishes_num`, `dishes_floor`, `dishes_shop`) VALUES (15, '肥牛石锅拌饭', 'https://p3.ssl.qhimgs3.com/t01ad60162ca7ed67c1.jpg', 15, '肥牛石锅拌饭', '1', '2', '5');
COMMIT;

-- ----------------------------
-- Table structure for dishShop
-- ----------------------------
DROP TABLE IF EXISTS `dishShop`;
CREATE TABLE `dishShop` (
  `id` int NOT NULL,
  `dishes_id` int DEFAULT NULL,
  `shop_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dishes_id` (`dishes_id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `dishshop_ibfk_1` FOREIGN KEY (`dishes_id`) REFERENCES `dishes` (`dishes_id`),
  CONSTRAINT `dishshop_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of dishShop
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feedbacks
-- ----------------------------
DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE `feedbacks` (
  `feedbacks_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `recommend` varchar(1024) DEFAULT NULL,
  `send_time` datetime DEFAULT NULL,
  `reply` varchar(1024) DEFAULT NULL,
  `receive_time` datetime DEFAULT NULL,
  PRIMARY KEY (`feedbacks_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of feedbacks
-- ----------------------------
BEGIN;
INSERT INTO `feedbacks` (`feedbacks_id`, `user_id`, `recommend`, `send_time`, `reply`, `receive_time`) VALUES (1, 3, '希望可以配汤', NULL, NULL, NULL);
INSERT INTO `feedbacks` (`feedbacks_id`, `user_id`, `recommend`, `send_time`, `reply`, `receive_time`) VALUES (2, 3, '营业时间可以拉长点', NULL, NULL, NULL);
INSERT INTO `feedbacks` (`feedbacks_id`, `user_id`, `recommend`, `send_time`, `reply`, `receive_time`) VALUES (3, 2, '菜打多一些', NULL, NULL, NULL);
INSERT INTO `feedbacks` (`feedbacks_id`, `user_id`, `recommend`, `send_time`, `reply`, `receive_time`) VALUES (4, 3, '品类多一点', NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes` (
  `likes_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `dishes_id` int DEFAULT NULL,
  PRIMARY KEY (`likes_id`),
  KEY `user_id` (`user_id`),
  KEY `dishes_id` (`dishes_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`dishes_id`) REFERENCES `dishes` (`dishes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of likes
-- ----------------------------
BEGIN;
INSERT INTO `likes` (`likes_id`, `user_id`, `dishes_id`) VALUES (1, 3, 1);
INSERT INTO `likes` (`likes_id`, `user_id`, `dishes_id`) VALUES (2, 3, 6);
INSERT INTO `likes` (`likes_id`, `user_id`, `dishes_id`) VALUES (3, NULL, 1);
INSERT INTO `likes` (`likes_id`, `user_id`, `dishes_id`) VALUES (4, 3, 3);
INSERT INTO `likes` (`likes_id`, `user_id`, `dishes_id`) VALUES (5, 3, 10);
COMMIT;

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `nid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `poster` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `publish_time` datetime DEFAULT NULL,
  `revoke_time` datetime DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of notice
-- ----------------------------
BEGIN;
INSERT INTO `notice` (`nid`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (1, '文明用餐', 'https://img.tukuppt.com/bg_grid/00/20/42/GuxrFZBf3k.jpg!/fh/350', '食堂请文明用餐', NULL, NULL);
INSERT INTO `notice` (`nid`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (2, '节约粮食', 'https://pic5.sucaisucai.com/02/61/02961435_2.jpg', '请节约粮食', NULL, NULL);
INSERT INTO `notice` (`nid`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (3, '光盘行动', 'https://pic5.sucaisucai.com/07/25/07225115_2.jpg', '光盘行动', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for notices
-- ----------------------------
DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices` (
  `notice_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `poster` varchar(1024) DEFAULT NULL,
  `content` varchar(1024) DEFAULT NULL,
  `publish_time` datetime DEFAULT NULL,
  `revoke_time` datetime DEFAULT NULL,
  PRIMARY KEY (`notice_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of notices
-- ----------------------------
BEGIN;
INSERT INTO `notices` (`notice_id`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (1, '文明用餐', 'https://img.tukuppt.com/bg_grid/00/20/42/GuxrFZBf3k.jpg!/fh/350', '食堂请文明用餐', NULL, NULL);
INSERT INTO `notices` (`notice_id`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (2, '节约粮食', 'https://pic5.sucaisucai.com/02/61/02961435_2.jpg', '请节约粮食', NULL, NULL);
INSERT INTO `notices` (`notice_id`, `title`, `poster`, `content`, `publish_time`, `revoke_time`) VALUES (3, '光盘行动', 'https://pic5.sucaisucai.com/07/25/07225115_2.jpg', '光盘行动', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for records
-- ----------------------------
DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `records_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `dishes_id` int DEFAULT NULL,
  PRIMARY KEY (`records_id`),
  KEY `dishes_id` (`dishes_id`),
  CONSTRAINT `records_ibfk_1` FOREIGN KEY (`dishes_id`) REFERENCES `dishes` (`dishes_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of records
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for remarks
-- ----------------------------
DROP TABLE IF EXISTS `remarks`;
CREATE TABLE `remarks` (
  `remarks_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `dishes_id` int DEFAULT NULL,
  `content` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`remarks_id`),
  KEY `user_id` (`user_id`),
  KEY `dishes_id` (`dishes_id`),
  CONSTRAINT `remarks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `remarks_ibfk_2` FOREIGN KEY (`dishes_id`) REFERENCES `dishes` (`dishes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of remarks
-- ----------------------------
BEGIN;
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (1, 3, 1, 'good');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (2, 1, 1, '不错');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (3, 2, 1, '好吃');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (4, 3, 3, '好吃');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (5, 3, 10, '特别好吃');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (6, 3, 1, '吃了又吃');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (7, 3, 3, 'very good');
INSERT INTO `remarks` (`remarks_id`, `user_id`, `dishes_id`, `content`) VALUES (8, 2, 3, '一般');
COMMIT;

-- ----------------------------
-- Table structure for shops
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `shop_id` int NOT NULL,
  `shop_name` varchar(255) DEFAULT NULL,
  `shop_photo` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of shops
-- ----------------------------
BEGIN;
INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_photo`) VALUES (1, '兰州拉面', 'https://i02piccdn.sogoucdn.com/86ff4684a3eaa56a');
INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_photo`) VALUES (2, '秦风面匠', 'https://inews.gtimg.com/newsapp_bt/0/12630911918/1000');
INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_photo`) VALUES (3, '营养自选', 'https://pic7.sucaisucai.com/06/61/06161627_2.jpg');
INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_photo`) VALUES (4, '面包房', 'https://img95.699pic.com/photo/50072/8903.jpg_wh860.jpg');
INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_photo`) VALUES (5, '石锅拌饭', 'https://photo.16pic.com/00/93/83/16pic_9383458_b.jpg');
COMMIT;

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `content` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of test
-- ----------------------------
BEGIN;
INSERT INTO `test` (`content`, `num`, `id`) VALUES ('tom', '1', 1);
INSERT INTO `test` (`content`, `num`, `id`) VALUES ('alice', '2', 2);
INSERT INTO `test` (`content`, `num`, `id`) VALUES ('bob', '3', 3);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `name`, `avatar`) VALUES (1, '白白', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp');
INSERT INTO `user` (`id`, `name`, `avatar`) VALUES (2, 'duck', 'https://p1.itc.cn/q_70/images03/20230427/97e4cf398c1c453f98f8135b202479d6.jpeg');
INSERT INTO `user` (`id`, `name`, `avatar`) VALUES (3, '想成为冰冰的菠菜', 'https://thirdwx.qlogo.cn/mmopen/vi_32/2iagtqw7iaHzVuhGmLx7yum9BCx0VBTGcCXREVS7hbCqdqY4ysEgwibZBJ49HiaTcgLZRgiakrR70ZNnCmhkMvT3IhQ/132');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
