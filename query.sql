CREATE TABLE product(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE kategori(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
);

INSERT INTO kategori (id, name) VALUES (1, 'pakaian pria'), (2, 'pakaian wanita');