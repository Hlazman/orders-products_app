CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `date` datetime,
  `description` varchar(255)
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `serialNumber` int,
  `isNew` bool,
  `photo` varchar(255),
  `title` varchar(255),
  `type` varchar(255),
  `specification` varchar(255),
  `order` int,
  `guarantee_start` datetime,
  `guarantee_end` datetime,
  `date` datetime,
  `price_value_USD` decimal(10,2),
  `price_symbol_USD` varchar(10),
  `price_isDefault_USD` bool,
  `price_value_UAH` decimal(10,2),
  `price_symbol_UAH` varchar(10),
  `price_isDefault_UAH` bool
);

ALTER TABLE `orders` ADD FOREIGN KEY (`id`) REFERENCES `products` (`order`);
