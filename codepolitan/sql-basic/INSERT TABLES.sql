SELECT * FROM CUSTOMERS;
SELECT * FROM PRODUCTS;
SELECT * FROM ITEMS;
SELECT * FROM ORDERS;
SELECT * FROM EMPLOYEES;

-- INSERT INTO CUSTOMERS(CUSTOMER_NAME, CITY, COUNTRY)
-- VALUES('Audie Milson', 'Jakarta', 'Indonesia');

-- INSERT INTO PRODUCTS(PRODUCT_NAME, PRODUCT_PRICE)
-- VALUES('Windows 10 Pro', 1599000);

-- INSERT INTO PRODUCTS(PRODUCT_NAME, PRODUCT_PRICE)
-- VALUES('Dicoding Subscription', 499000),
-- ('Codepolitan FullStack Course', 439000);

-- UPDATE PRODUCTS SET PRODUCT_NAME = 'Dicoding Academy Subscriptions'
-- WHERE PRODUCT_ID = 2;

-- INSERT INTO EMPLOYEES(EMPLOYEE_NAME, ADDRESS, AGE, GENDER)
-- VALUES('Ichigo Kurosaki', 'Soul Society District 1', 20, 'Male'),
-- ('Renji Abarai', 'Soul Society Rukongai District 38', 38, 'Male'),
-- ('Rukia Kuchiki', 'Soul Society Rukongai District 38', 25, 'Female');

UPDATE EMPLOYEES SET GENDER = 'Female' WHERE EMPLOYEE_ID = 3;

DELETE FROM EMPLOYEES WHERE EMPLOYEE_ID > 5;