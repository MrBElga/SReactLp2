CREATE DATABASE loja;

USE loja;

CREATE TABLE  categorias (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);


CREATE TABLE fornecedores (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    cnpj VARCHAR(14) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(14),
    celular VARCHAR(15),
    endereco VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    uf VARCHAR(2),
    cep VARCHAR(10),
    email VARCHAR(255)
);


CREATE TABLE  clientes (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(14),
    celular VARCHAR(15),
    endereco VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    uf VARCHAR(2),
    cep VARCHAR(10),
    email VARCHAR(255)
);

CREATE TABLE produtos (
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    estoque INT,
    fornecedor_id INT,
    FOREIGN KEY (fornecedor_id) REFERENCES fornecedores (codigo)
);
