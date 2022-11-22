-- 1.
SELECT * FROM store.itens
WHERE name LIKE 'gr%';
-- 2.
SELECT * FROM store.supplies
WHERE item_id = 2
ORDER BY supplier_id;
-- 3.
SELECT item_id, price, supplier_id FROM store.supplies
WHERE supplier_id LIKE '%n%';
-- 4.
SELECT * FROM store.suppliers
WHERE name LIKE '%ltda%'
ORDER BY name DESC;
-- 5.
SELECT * FROM store.suppliers
WHERE id LIKE '%f%';
-- 6.
SELECT * FROM store.supplies
WHERE price BETWEEN 15 AND 40
ORDER BY price;
-- 7.
SELECT COUNT(*) FROM store.sales
WHERE DATE(order_date) BETWEEN '2018/04/15' AND '2019/07/30 23:59:59';