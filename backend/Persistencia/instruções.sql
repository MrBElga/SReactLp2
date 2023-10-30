CREATE DATABASE loja;

USE loja;

CREATE TABLE usuarios(
    usu_codigo INT AUTO_INCREMENT PRIMARY KEY,
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
    forn_nome VARCHAR(255) NOT NULL,
    forn_telefone VARCHAR(14),
    forn_celular VARCHAR(15),
    forn_endereco VARCHAR(255),
    forn_numero VARCHAR(10),
    forn_bairro VARCHAR(100),
    forn_cidade VARCHAR(100),
    forn_uf VARCHAR(2),
    forn_cep VARCHAR(10),
    forn_email VARCHAR(255)
);


CREATE TABLE  clientes (
    cli_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cli_cpf VARCHAR(14) NOT NULL,
    cli_nome VARCHAR(255) NOT NULL,
    cli_telefone VARCHAR(14),
    cli_celular VARCHAR(15),
    cli_endereco VARCHAR(255),
    cli_numero VARCHAR(10),
    cli_bairro VARCHAR(100),
    cli_cidade VARCHAR(100),
    cli_uf VARCHAR(2),
    cli_cep VARCHAR(10),
    cli_email VARCHAR(255)
);

CREATE TABLE produtos (
    prod_codigo INT AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(255) NOT NULL,
    prod_descricao TEXT,
    prod_preco DECIMAL(10, 2),
    prod_estoque INT,
    forn_fornecedor_id INT,
    FOREIGN KEY (forn_fornecedor_id) REFERENCES fornecedores (forn_codigo)
);
