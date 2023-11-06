CREATE DATABASE loja;

USE loja;

CREATE TABLE adm (
    adm_codigo INT AUTO_INCREMENT PRIMARY KEY,
    adm_nome VARCHAR(255) NOT NULL,
    adm_senha VARCHAR(255) NOT NULL,
    usu_prior INT NOT NULL
);

CREATE TABLE fornecedores (
    forn_codigo INT AUTO_INCREMENT PRIMARY KEY,
    forn_cnpj VARCHAR(14) NOT NULL,
    forn_telefone VARCHAR(14) NOT NULL,
    forn_celular VARCHAR(15) NOT NULL,
    forn_endereco VARCHAR(255) NOT NULL,
    forn_numero VARCHAR(10) NOT NULL,
    forn_bairro VARCHAR(100) NOT NULL,
    forn_cidade VARCHAR(100) NOT NULL,
    forn_uf VARCHAR(2) NOT NULL,
    forn_cep VARCHAR(10) NOT NULL,
    forn_email VARCHAR(255) NOT NULL,
    usu_prior INT NOT NULL
);

CREATE TABLE  clientes (
    cli_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cli_cpf VARCHAR(14) NOT NULL,
    cli_telefone VARCHAR(14) NOT NULL,
    cli_celular VARCHAR(15) NOT NULL,
    cli_endereco VARCHAR(255) NOT NULL,
    cli_numero VARCHAR(10) NOT NULL,
    cli_bairro VARCHAR(100) NOT NULL,
    cli_cidade VARCHAR(100) NOT NULL,
    cli_uf VARCHAR(2) NOT NULL,
    cli_cep VARCHAR(10) NOT NULL,
    cli_email VARCHAR(255) NOT NULL,
    usu_prior INT NOT NULL
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

CREATE TABLE  categorias (
    cat_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cat_nome VARCHAR(255) NOT NULL,
    cat_descricao TEXT
);


-- para a tabela admin
INSERT INTO adm (adm_nome, adm_senha, usu_prior) 
VALUES ('João', '123456', 1);
INSERT INTO adm (adm_nome, adm_senha, usu_prior) 
VALUES ('Maria', 'abcdef', 1);
INSERT INTO adm (adm_nome, adm_senha, usu_prior) 
VALUES ('Pedro', '7890', 1);

-- Para a tabela `fornecedores`:

INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_prior) 
VALUES ('12345678901234', '12345678', '987654321', 'Rua A', '123', 'Centro', 'São Paulo', 'SP', '12345-678', 'fornecedor1@gmail.com', 3);
INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_prior) 
VALUES ('98765432109876', '87654321', '123456789', 'Rua B', '456', 'Centro', 'São Paulo', 'SP', '98765-432', 'fornecedor2@gmail.com', 3);
INSERT INTO fornecedores (forn_cnpj, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_prior) 
VALUES ('54321678901234', '45678901', '987654321', 'Rua C', '789', 'Centro', 'São Paulo', 'SP', '54321-098', 'fornecedor3@gmail.com', 3);

-- Para a tabela `clientes`:

INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior)
 VALUES ('12345678901', '12345678', '987654321', 'Rua D', '123', 'Centro', 'São Paulo', 'SP', '12345-678', 'cliente1@gmail.com', 2);
INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior) 
VALUES ('98765432109', '12345678', '987654321', 'Rua E', '456', 'Centro', 'São Paulo', 'SP', '98765-432', 'cliente2@gmail.com', 2);
INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior)
 VALUES ('54321678901', '12345678', '987654321', 'Rua F', '789', 'Centro', 'São Paulo', 'SP', '54321-098', 'cliente3@gmail.com', 2);

-- Para a tabela `categorias`:

INSERT INTO categorias (cat_nome, cat_descricao)
VALUES ('Eletrônicos', 'Categoria de produtos eletrônicos');
INSERT INTO categorias (cat_nome, cat_descricao) 
VALUES ('Roupas', 'Categoria de produtos de vestuário');
INSERT INTO categorias (cat_nome, cat_descricao) 
VALUES ('Alimentos', 'Categoria de produtos alimentícios');

-- Para a tabela `produtos`:

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id) 
VALUES ('Notebook', 'Notebook com processador Intel i5, 8GB de RAM e 256GB de SSD', 3499.99, 10, 1);
INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id) 
VALUES ('Camiseta', 'Camiseta de algodão na cor branca', 29.99, 50, 2);
INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, forn_fornecedor_id) 
VALUES ('Arroz', 'Pacote de arroz branco tipo 1 com 5kg', 19.99, 100, 3);