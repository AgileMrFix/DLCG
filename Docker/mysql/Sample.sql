DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `parent_id` int NULL DEFAULT NULL,
  `active` bigint NULL DEFAULT 1,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;


INSERT INTO `categories` VALUES (1, 'Computers', 0, 1, NULL, NULL);
INSERT INTO `categories` VALUES (2, 'Cell Phones', 0, 1, NULL, NULL);
INSERT INTO `categories` VALUES (3, 'Office Supplies', 0, 1, NULL, NULL);
INSERT INTO `categories` VALUES (4, 'Laptops', 1, 1, NULL, NULL);
INSERT INTO `categories` VALUES (5, 'Desktop', 1, 1, NULL, NULL);
INSERT INTO `categories` VALUES (6, 'Networking', 1, 1, NULL, NULL);
INSERT INTO `categories` VALUES (7, 'Accessories', 2, 1, NULL, NULL);
INSERT INTO `categories` VALUES (8, 'Rogers', 2, 1, NULL, NULL);
INSERT INTO `categories` VALUES (9, 'Telus', 2, 1, NULL, NULL);
INSERT INTO `categories` VALUES (10, 'Printer', 3, 1, NULL, NULL);
INSERT INTO `categories` VALUES (11, 'Ink & Toner', 3, 1, NULL, NULL);
INSERT INTO `categories` VALUES (12, 'Printer Ink', 11, 1, NULL, NULL);
INSERT INTO `categories` VALUES (13, 'Supertank Printer Ink', 11, 1, NULL, NULL);
INSERT INTO `categories` VALUES (14, 'Toner', 11, 1, NULL, NULL);
INSERT INTO `categories` VALUES (15, 'HP', 14, 1, NULL, NULL);
INSERT INTO `categories` VALUES (16, 'Canon', 14, 1, NULL, NULL);
INSERT INTO `categories` VALUES (17, 'Black', 16, 1, NULL, NULL);
INSERT INTO `categories` VALUES (18, 'Color', 16, 1, NULL, NULL);
INSERT INTO `categories` VALUES (19, 'Set', 16, 1, NULL, NULL);


DROP TABLE IF EXISTS `category_product`;
CREATE TABLE `category_product`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NULL DEFAULT NULL,
  `product_id` int NULL DEFAULT NULL,
  `active` tinyint(1) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 ;


INSERT INTO `category_product` VALUES (1, 1, 1, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (2, 1, 3, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (3, 4, 1, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (4, 4, 3, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (5, 4, 4, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (6, 6, 5, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (7, 6, 6, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (8, 8, 7, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (9, 8, 8, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (10, 19, 9, 1, NULL, NULL);
INSERT INTO `category_product` VALUES (11, 19, 10, 1, NULL, NULL);

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4  NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `active` int NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;


INSERT INTO `products` VALUES (1, 'Lenova Ryzen 9', 1000.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (2, 'Canon 8200 Series Toner Set', 500.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (3, 'Samsung i7', 1255.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (4, 'Lenova i7', 1200.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (5, 'Asus AC2900', 96.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (6, 'NetGear AC2100', 78.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (7, 'iPhone 13 128GB', 1100.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (8, 'Galaxy S22', 850.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (9, 'TN 433', 120.00, 1, NULL, NULL);
INSERT INTO `products` VALUES (10, 'CF21X', 100.00, 1, NULL, NULL);

