INSERT INTO
  department (name)
VALUES
  ("Human Resources"),
  ("Production"),
  ("Marketing"),
  ("R & D"),
  ("Accounting");

INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Sales Lead", 70000, 3),
  ("Sales Person", 60000, 3),
  ("Lead Developer", 85000, 2),
  ("Junior Developer", 65000, 2),
  ("Accountant", 90000, 5),
  ("Lead Engineer", 80000, 4),
  ("Engineer", 70000, 4),
  ("HR Generalist", 60000, 1),
  ("HR Lead", 65000, 1);

INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Isabeau', 'De witt', 1, NULL),
  ('Cloe', 'Joanna', 6, NULL),
  ('Zebulon', 'Marlow', 3, NULL),
  ('Corrinne', 'Blondy', 9, NULL),
  ('Aguistin', 'Matthaeus', 2, 4),
  ('Bing', 'Keen', 8, 3),
  ('Alick', 'Shea', 2, 6),
  ('Emelen', 'Nissy', 6, 5),
  ('Bekki', 'Diannne', 2, 2),
  ('Giordano', 'Giffy', 8, 7),
  ('Ericha', 'Buck', 2, 6),
  ('Clevie', 'Westbrooke', 8, 9),
  ('Norbert', 'Jacquenetta', 2, 1),
  ('Melisandra', 'Darrelle', 2, 4),
  ('Pen', 'Millisent', 7, 4),
  ('Rosalie', 'Jessie', 8, 6),
  ('Andy', 'Grant', 2, 10),
  ('Melisandra', 'Sephira', 4, 11),
  ('Hollis', 'Gus', 5, 13),
  ('Catherin', 'Etty', 2, 13),
  ('Graehme', 'Cherish', 8, 14),
  ('Karoline', 'Quentin', 7, 14),
  ('Zonnya', 'Reade', 8, 14),
  ('Dulcinea', 'Gianna', 2, 14),
  ('Myrtice', 'Allyn', 4, 15);