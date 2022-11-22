USE pixar;
-- 1.
INSERT INTO movies (title, director, year, length_minutes) VALUES
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incriveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

-- 2.
INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);