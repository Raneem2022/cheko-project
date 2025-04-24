-- Create the `menu` table
CREATE TABLE IF NOT EXISTS menu (
                                    id SERIAL PRIMARY KEY,
                                    name VARCHAR(100) NOT NULL,
                                    description TEXT NOT NULL,
                                    price DOUBLE PRECISION NOT NULL,
                                    image TEXT NOT NULL,
                                    calorie INTEGER NOT NULL,
                                    category VARCHAR(50) NOT NULL,
                                    lat DOUBLE PRECISION NOT NULL,
                                    lng DOUBLE PRECISION NOT NULL
);

-- Insert data into the `menu` table
INSERT INTO menu (id, name, description, price, image, calorie, category, lat, lng) VALUES

-- Sushi
(1, 'California Roll', 'Crab, avocado, and cucumber rolled in rice and seaweed.', 109.00, 'https://simmerandsage.com/wp-content/uploads/2023/09/Crunchy-California-Roll1.jpg', 250, 'Sushi', 24.7136, 46.6753),
(2, 'Spicy Tuna Roll', 'Tuna mixed with spicy mayo, rolled with rice and seaweed.', 87.99, 'https://res.cloudinary.com/perkchops/image/upload/q_40,fl_lossy,w_600,/v1636206374/product/2021106/gtj9qga1haptg6iwwugd.jpg', 300, 'Sushi', 24.7136, 46.6753),
(3, 'Salmon Nigiri', 'Slices of fresh salmon over pressed vinegared rice.', 67.99, 'https://www.manusmenu.com/wp-content/uploads/2013/09/1-Salmon-Nigiri-1-1-of-1.jpg', 200, 'Sushi', 24.7136, 46.6753),
(4, 'Eel Avocado Roll', 'Grilled eel and avocado rolled in rice and seaweed.', 160.99, 'https://sushihanatulsa.com/wp-content/uploads/2020/08/Sushi_Hana_315-scaled.jpg', 350, 'Sushi', 24.7136, 46.6753),
(5, 'Vegetable Roll', 'Assorted fresh vegetables rolled in rice and seaweed.', 69.99, 'https://carolinarice.com/wp-content/uploads/2019/05/Vegetarian-Sushi-Rolls-with-Soy-Sauce.jpg', 180, 'Sushi', 24.7136, 46.6753),
(6, 'Dragon Roll', 'Eel and cucumber inside, topped with avocado and eel sauce.', 102.99, 'https://static.wixstatic.com/media/596070_630a3637860e4a1a9da6203f4618f04f~mv2.jpg/v1/fill/w_1216,h_912,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/596070_630a3637860e4a1a9da6203f4618f04f~mv2.jpg', 400, 'Sushi', 24.7136, 46.6753),
(7, 'Rainbow Roll', 'Crab and avocado inside, topped with assorted sashimi.', 103.99, 'https://hanayafm.com/wp-content/uploads/2024/01/rainbow-sushi-roll.jpg', 420, 'Sushi', 24.7136, 46.6753),
(8, 'Shrimp Tempura Roll', 'Crispy shrimp tempura with cucumber and avocado.', 101.99, 'https://static.wixstatic.com/media/e97c92_2e2de23115024114a1a4a67f31c162a6~mv2.jpg/v1/fill/w_1480,h_888,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e97c92_2e2de23115024114a1a4a67f31c162a6~mv2.jpg', 380, 'Sushi', 24.7136, 46.6753),
(9, 'Philadelphia Roll', 'Smoked salmon, cream cheese, and cucumber.', 99.99, 'https://hungryhealthyhappy.com/wp-content/uploads/2023/05/philadelphia-roll-finished-1.jpg', 320, 'Sushi', 24.7136, 46.6753),
(10, 'Tuna Sashimi', 'Slices of raw tuna served without rice.', 89.99, 'https://getfish.com.au/cdn/shop/files/Step_3_-_Tuna_Sashimi_480x.png?v=1717040001', 150, 'Sushi', 24.7136, 46.6753),

-- Drinks
(11, 'Orange Juice', 'Freshly squeezed orange juice.', 13.99, 'https://offwhite-sa.com/public/m_JUNiKmP9utH1oKsYOMN7uIjFvoCP4Kl16wtaW7jd.jpg', 110, 'Drinks', 24.7136, 46.6753),
(12, 'Pineapple Juice', 'Freshly pressed Pineapple juice.', 13.99, 'https://offwhite-sa.com/public/m_80Jyacb1PbwUjKUftXp5oQdTlg78K2iJ5M8h0GNY.jpg', 120, 'Drinks', 24.7136, 46.6753),
(13, 'Lemonade', 'Refreshing lemonade made with fresh lemons.', 12.99, 'https://offwhite-sa.com/public/m_a2tqWhnrxhMxFgDgOx4ECQb6m3c5mV0ge0YTBH56.jpg', 90, 'Drinks', 24.7136, 46.6753),
(14, 'Iced Tea', 'Chilled black tea served over ice.', 12.49, 'https://hips.hearstapps.com/hmg-prod/images/delish-210419-iced-tea-02-landscape-jg-1619020612.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*', 80, 'Drinks', 24.7136, 46.6753),
(15, 'Turkish coffee', 'Freshly brewed hot coffee.', 11.99, 'https://offwhite-sa.com/public/m_QBiDa9t6CkoikEmYbLI9fhxL4rV3oUEbNbqpabK1.jpg', 5, 'Drinks', 24.7136, 46.6753),
(16, 'Tea', 'Hot green tea brewed to perfection.', 11.99, 'https://offwhite-sa.com/public/m_qTIrZha4bWQDEIbrCepjRntP1YDpLicbD5wUXX6D.jpg', 0, 'Drinks', 24.7136, 46.6753),
(17, 'Smoothie', 'Blended fruit smoothie with yogurt.', 14.99, 'https://offwhite-sa.com/public/m_wSyKc1s9CAEk3cJffv5VglafKC6mxcrdIzdMjij8.jpg', 250, 'Drinks', 24.7136, 46.6753),
(18, 'Milkshake', 'Creamy milkshake with your choice of flavor.', 15.99, 'https://offwhite-sa.com/public/m_4ZrY1MFA2xTsGTHBDDSgblnXCMkDvdaE0pOYbn2t.jpg', 300, 'Drinks', 24.7136, 46.6753),
(19, 'Sparkling Water', 'Carbonated mineral water.', 11.49, 'https://offwhite-sa.com/public/m_W11pN6aWm3Lh6Tl0KGhYqf5OQHiS8pXR4a9USaWZ.jpg', 0, 'Drinks', 24.7136, 46.6753),

-- Soup
(20, 'Chicken Cream Soup', 'A rich and creamy chicken soup with tender pieces of chicken and vegetables.', 45.99, 'https://offwhite-sa.com/public/m_retmuPGH3GMcpcAD6lD0c81VxVWOKf3HuF9d6CTu.jpg', 210, 'Soup', 24.7136, 46.6753),
(21, 'Wild Mushroom Soup', 'A flavorful soup made with wild mushrooms, cream, and herbs.', 46.99, 'https://offwhite-sa.com/public/m_uekZVeNUwZbRN045BE1377XifYyASBAt2woMIY7z.jpg', 180, 'Soup', 24.7136, 46.6753),
(22, 'Tomato Soup', 'A smooth and savory roasted tomato soup with fresh basil and a touch of cream.', 44.99, 'https://www.jocooks.com/wp-content/uploads/2016/01/roasted-tomato-soup-1-1.jpg', 150, 'Soup', 24.7136, 46.6753),
(23, 'Lentil Soup', 'A hearty soup made with lentils, vegetables, and a blend of spices.', 45.49, 'https://offwhite-sa.com/public/m_wCFxxqifW7oSPCNIaMGhFbYCDP3IpRYSb8Mus1lg.jpg', 220, 'Soup', 24.7136, 46.6753),
(24, 'Shrimp Soup', 'A light and flavorful shrimp soup with fresh herbs and vegetables.', 47.99, 'https://offwhite-sa.com/public/m_4Q7t7C02KPAE3qoJuY57EZeJaGwOJfMsndijCUXq.jpg', 250, 'Soup', 24.7136, 46.6753),
(25, 'Butternut Squash Soup', 'A creamy and sweet butternut squash soup with hints of nutmeg and cinnamon.', 46.49, 'https://thenaturalnurturer.com/wp-content/uploads/2023/08/Butternutsquashsoup_-24.jpg', 230, 'Soup', 24.7136, 46.6753),
(26, 'Gazpacho', 'A refreshing cold Spanish soup made with tomatoes, cucumbers, and peppers.', 44.99, 'https://www.jocooks.com/wp-content/uploads/2023/07/gazpacho-1-7.jpg', 80, 'Soup', 24.7136, 46.6753),
(27, 'Pumpkin Soup', 'A smooth and creamy pumpkin soup, perfect for the fall season.', 45.99, 'https://www.jocooks.com/wp-content/uploads/2023/11/pumpkin-soup-1-18.jpg', 210, 'Soup', 24.7136, 46.6753),
(28, 'Tripe Soup (Ciorba de Burta)', 'A traditional Romanian soup made with beef tripe, vegetables, and sour cream.', 48.49, 'https://www.jocooks.com/wp-content/uploads/2014/02/tripe-soup-1-15.jpg', 320, 'Soup', 24.7136, 46.6753),
(29, 'Potato Leek Soup', 'A creamy potato leek soup with hints of garlic and thyme.', 45.49, 'https://www.jocooks.com/wp-content/uploads/2020/03/potato-leek-soup-1-15.jpg', 180, 'Soup', 24.7136, 46.6753),
(30, 'Egg Drop Soup', 'A simple Chinese soup made with eggs, broth, and scallions.', 44.49, 'https://www.jocooks.com/wp-content/uploads/2019/09/egg-drop-soup-1-8.jpg', 180, 'Soup', 24.7136, 46.6753),

-- Breakfast
(31, 'Pancakes', 'Fluffy pancakes served with maple syrup and butter.', 45.99, 'https://www.jocooks.com/wp-content/uploads/2023/12/eggnog-pancakes-1.jpg', 350, 'Breakfast', 24.7136, 46.6753),
(32, 'French Toast', 'Golden-brown toast with powdered sugar and syrup.', 46.49, 'https://www.jocooks.com/wp-content/uploads/2024/04/air-fryer-french-toast-sticks-1-11.jpg', 330, 'Breakfast', 24.7136, 46.6753),
(33, 'Eggs Benedict', 'Poached eggs, English muffin, and hollandaise sauce.', 48.99, 'https://www.jocooks.com/wp-content/uploads/2020/08/eggs-benedict-1-13.jpg', 400, 'Breakfast', 24.7136, 46.6753),
(34, 'Arepas', 'Toast topped with mashed avocado, sprinkled with chili flakes.', 47.99, 'https://www.jocooks.com/wp-content/uploads/2024/06/homemade-arepa-1-19.jpg', 250, 'Breakfast', 24.7136, 46.6753),
(35, 'Omelette', 'Fluffy omelette with cheese, spinach, and tomatoes.', 46.49, 'https://www.jocooks.com/wp-content/uploads/2023/11/denver-omelette-1-14.jpg', 270, 'Breakfast', 24.7136, 46.6753),
(36, 'Smoothie Bowl', 'Smoothie base topped with fresh fruits and granola.', 47.49, 'https://www.eatyourselfskinny.com/wp-content/uploads/2017/08/smoothie-bowl-4.jpg', 300, 'Breakfast', 24.7136, 46.6753),
(37, 'Salmon Cream Cheese Bagel', 'Toasted bagel with a generous spread of cream cheese and salmon.', 43.99, 'https://www.jocooks.com/wp-content/uploads/2021/06/salmon-cream-cheese-bagel-1-8.jpg', 230, 'Breakfast', 24.7136, 46.6753),
(38, 'Breakfast Burrito', 'Flour tortilla filled with scrambled eggs, cheese, and salsa.', 45.99, 'https://www.jocooks.com/wp-content/uploads/2011/05/breakfast-burritos-1-2.jpg', 400, 'Breakfast', 24.7136, 46.6753),
(39, 'Cinnamon Rolls', 'Soft rolls with cinnamon sugar, glazed with icing.', 44.49, 'https://www.jocooks.com/wp-content/uploads/2019/10/sticky-buns-1-21.jpg', 320, 'Breakfast', 24.7136, 46.6753),
(40, 'Yogurt Parfait', 'Layered yogurt with granola and mixed berries.', 44.99, 'https://www.jocooks.com/wp-content/uploads/2024/05/yogurt-parfait-1-12.jpg', 200, 'Breakfast', 24.7136, 46.6753);