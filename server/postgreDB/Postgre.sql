

DROP DATABASE IF EXISTS homevalue;
CREATE DATABASE IF NOT EXISTS homevalue;
USE homevalue;
 

 
CREATE TABLE homes (
 id INT,
 address VARCHAR,
 zipCode INT,
 onMarket BOOLEAN,
 sqft INT,
 bedCount INT,
 bathCount INT,
 listingValue INT,
 pictureUrl VARCHAR,
 PRIMARY KEY (id)
);



COPY homes (id, address, zipCode, onMarket, sqft, bedCount, bathCount, listingValue, pictureUrl) 
FROM '/Users/alexcai/Desktop/SEC/abode-homevalue-pricetax/fakeData/homes4.csv' DELIMITER',' CSV HEADER;

COPY homes (id, address, zipCode, onMarket, sqft, bedCount, bathCount, listingValue, pictureUrl) 
FROM '/Users/alexcai/Desktop/SEC/abode-homevalue-pricetax/fakeData/homes5.csv' DELIMITER',' CSV HEADER;