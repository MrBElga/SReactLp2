CREATE DATABASE loja;

USE loja;

CREATE TABLE usuarios(
    usu_codigo INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(45),
    usu_senha VARCHAR(45),
    usu_prior INT
);

CREATE TABLE  categorias (
    cat_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cat_nome VARCHAR(255) NOT NULL,
    cat_descricao TEXT
);


CREATE TABLE fornecedores (
    forn_codigo INT AUTO_INCREMENT PRIMARY KEY,
    forn_cnpj VARCHAR(14) NOT NULL,
    forn_telefone VARCHAR(14),
    forn_celular VARCHAR(15),
    forn_endereco VARCHAR(255),
    forn_numero VARCHAR(10),
    forn_bairro VARCHAR(100),
    forn_cidade VARCHAR(100),
    forn_uf VARCHAR(2),
    forn_cep VARCHAR(10),
    forn_email VARCHAR(255),
    usu_codigo INT NOT NULL,
    FOREIGN KEY (usu_codigo) REFERENCES usuarios (usu_codigo)
);


CREATE TABLE  clientes (
    cli_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cli_cpf VARCHAR(14) NOT NULL,
    cli_telefone VARCHAR(14),
    cli_celular VARCHAR(15),
    cli_endereco VARCHAR(255),
    cli_numero VARCHAR(10),
    cli_bairro VARCHAR(100),
    cli_cidade VARCHAR(100),
    cli_uf VARCHAR(2),
    cli_cep VARCHAR(10),
    cli_email VARCHAR(255),
    usu_codigo INT NOT NULL,
    FOREIGN KEY (usu_codigo) REFERENCES usuarios (usu_codigo)

);

CREATE TABLE produtos (
    prod_codigo INT AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(255) NOT NULL,
    prod_descricao TEXT,
    prod_preco DECIMAL(10, 2),
    prod_estoque INT,
    forn_fornecedor_id INT NOT NULL,
    FOREIGN KEY (forn_fornecedor_id) REFERENCES fornecedores (forn_codigo)
);


-- Inserções na tabela 'usuarios'
INSERT INTO usuarios (usu_nome, usu_senha, usu_prior)
VALUES ('João', '123456', 1);

INSERT INTO usuarios (usu_nome, usu_senha, usu_prior)
VALUES ('Maria', 'abcdef', 2);

INSERT INTO usuarios (usu_nome, usu_senha, usu_prior)
VALUES ('Carlos', 'senha123', 3);


-- Inserções na tabela 'categorias'
INSERT INTO categorias (cat_nome, cat_descricao)
VALUES ('Eletrônicos', 'Produtos eletrônicos em geral');

INSERT INTO categorias (cat_nome, cat_descricao)
VALUES ('Móveis', 'Móveis e decoração para a casa');

INSERT INTO categorias (cat_nome, cat_descricao)
VALUES ('Roupas', 'Roupas e acessórios de moda');


-- Inserções na tabela 'fornecedores'
INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_codigo)
VALUES ('12345678901234', '99887766', '999888777', 'Rua A, 123', 'S/N', 'Centro', 'Cidade A', 'SP', '12345-678', 'fornecedor1@teste.com', 1);

INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_codigo)
VALUES ('98765432109876', '11223344', '1100110022', 'Av. B, 456', '10A', 'Bairro X', 'Cidade B', 'SP', '98765-432', 'fornecedor2@teste.com', 2);

INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_codigo)
VALUES ('54321098765432', '44332211', '5544332211', 'Rua C, 789', '20', 'Bairro Y', 'Cidade C', 'SP', '54321-098', 'fornecedor3@teste.com', 3);


-- Inserções na tabela 'clientes'
INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_codigo)
VALUES ('123.456.789-01', '99887766', '999888777', 'Rua D, 987', 'S/N', 'Centro', 'Cidade A', 'SP', '12345-678', 'cliente1@teste.com', 1);

INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_codigo)
VALUES ('987.654.321-09', '11223344', '1100110022', 'Av. E, 654', '10A', 'Bairro X', 'Cidade B', 'SP', '98765-432', 'cliente2@teste.com', 2);

INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_codigo)
VALUES ('321.654.987-90', '44332211', '5544332211', 'Rua F, 321', '20', 'Bairro Y', 'Cidade C', 'SP', '54321-098', 'cliente3@teste.com', 3);


-- Inserções na tabela 'produtos'
INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id)
VALUES ('Smartphone', 'Celular com sistema Android', '999.99', 10, 1);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id)
VALUES ('Sofá', 'Sofá de 3 lugares', '1999.99', 5, 2);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id)
VALUES ('Camiseta', 'Camiseta de algodão', '49.99', 20, 3);


-- join exemplo 
SELECT cli.cli_codigo, cli.cli_cpf, usr.usu_nome 
FROM clientes as cli
JOIN usuarios as usr ON cli.usu_codigo = usr.usu_codigo;