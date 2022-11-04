-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cookies;

CREATE TABLE cookies (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    special_ingredient VARCHAR NOT NULL,
    batch_size INT NOT NULL,
    contains_chocolate BOOLEAN NOT NULL
);

INSERT INTO cookies (name, special_ingredient, batch_size, contains_chocolate)
VALUES
('Sugar Cookie', 'Royal Icing', 24, FALSE),
('Macaron', 'French Buttercream', 24, FALSE),
('Gingerbread Humanoid', 'Royal Icing', 36, FALSE),
('Date Swirl', 'Date Nut Filling', 64, FALSE),
('Chocolate Crinkle', 'Powdered Sugar', 36, FALSE);



DROP TABLE IF EXISTS special_ingredient;

CREATE TABLE special_ingredient (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

INSERT INTO special_ingredient (name, type)
VALUES
('Royal Icing', 'Frosting'),
('French Buttercream', 'Filling'),
('Date-Nut Filling', 'Filling'),
('Powdered Sugar', 'Coating');