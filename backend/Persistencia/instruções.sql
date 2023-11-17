DROP DATABASE IF EXISTS loja;

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
    forn_cnpj VARCHAR(15) NOT NULL,
    forn_nome VARCHAR(45) NOT NULL,
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
    cli_nome VARCHAR(45) NOT NULL,
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



CREATE TABLE  categorias (
    cat_codigo INT AUTO_INCREMENT PRIMARY KEY,
    cat_nome VARCHAR(255) NOT NULL,
    cat_descricao TEXT
);

CREATE TABLE produtos (
    prod_codigo INT AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(255) NOT NULL,
    prod_descricao TEXT,
    prod_preco DECIMAL(10, 2),
    prod_estoque INT,
    cat_codigo INT NOT NULL,
    FOREIGN KEY (cat_codigo) REFERENCES categorias (cat_codigo)
);

INSERT INTO adm (adm_nome, adm_senha, usu_prior) VALUES
('Admin 1', 'pass123', 1),
('Admin 2', 'securePass', 1),
('Admin 3', 'adminPass', 1),
('User 1', 'userPass', 1),
('User 2', 'userSecure', 1),
('User 3', 'password1', 1),
('Staff 1', 'staffPass', 1),
('Staff 2', 'employeePass', 1),
('Manager 1', 'managerPass', 1),
('Supervisor 1', 'superPass', 1);

INSERT INTO fornecedores (forn_cnpj, forn_nome, forn_telefone, forn_celular, forn_endereco, forn_numero, forn_bairro, forn_cidade, forn_uf, forn_cep, forn_email, usu_prior) VALUES
('11111111111111', 'Argo Supplies', '1111111111', '999999999999', 'Market Street 1', '123', 'Merchant District', 'Floor 1', 'SAO', '12345-678', 'argo@supplies.com', 2),
('22222222222222', 'Silica Materials', '2222222222', '888888888888', 'Crystal Avenue 5', '555', 'Beast Village', 'Floor 47', 'SAO', '98765-432', 'silica@materials.com', 2),
('33333333333333', 'Lisbeth Forges', '3333333333', '777777777777', 'Craftsman Road 9', '789', 'Blacksmith Area', 'Floor 55', 'SAO', '54321-678', 'lisbeth@forges.com', 2),
('44444444444444', 'Agil Weapons', '4444444444', '666666666666', 'Armory Avenue 12', '666', 'Weapon Shop Area', 'Floor 37', 'SAO', '45678-901', 'agil@weapons.com', 2),
('55555555555555', 'Klein Supplies', '5555555555', '555555555555', 'Lobby Street 3', '321', 'Starting City', 'Floor 1', 'SAO', '56789-012', 'klein@supplies.com', 2),
('66666666666666', 'Yuuki Trading', '6666666666', '444444444444', 'Market Lane 7', '777', 'Medieval Realm', 'Floor 27', 'SAO', '34567-890', 'yuuki@trading.com', 2),
('77777777777777', 'Leafa Imports', '7777777777', '333333333333', 'Trading Street 2', '222', 'ALO', 'Swilvane', 'SAO', '23456-789', 'leafa@imports.com', 2),
('88888888888888', 'Sinon Tech', '8888888888', '222222222222', 'Technology Road 4', '444', 'GGO', 'SBC Glocken', 'SAO', '76543-210', 'sinon@tech.com', 2),
('99999999999999', 'Asuna Enterprises', '9999999999', '111111111111', 'Enterprise Street 6', '999', 'Yggdrasil', 'Floor 22', 'SAO', '89012-345', 'asuna@enterprises.com', 2),
('10101010101010', 'Kirito Trading', '1010101010', '101010101010', 'Trading Avenue 8', '1010', 'Starting City', 'Floor 1', 'SAO', '67890-123', 'kirito@trading.com', 2);


INSERT INTO clientes (cli_cpf, cli_nome, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior) VALUES
('11111111111', 'Kirito', '1111111111', '999999999999', 'Sword Street 1', '123', 'Aincrad', 'Floor 1', 'SAO', '12345-678', 'kirito@sao.com', 3),
('22222222222', 'Asuna', '2222222222', '888888888888', 'Love Avenue 5', '555', 'Yggdrasil', 'Floor 22', 'SAO', '98765-432', 'asuna@sao.com', 3),
('33333333333', 'Sinon', '3333333333', '777777777777', 'Sniper Road 9', '789', 'GGO', 'SBC Glocken', 'SAO', '54321-678', 'sinon@sao.com', 3),
('44444444444', 'Leafa', '4444444444', '666666666666', 'Fairy Avenue 12', '666', 'ALO', 'Swilvane', 'SAO', '45678-901', 'leafa@sao.com', 3),
('55555555555', 'Yuuki', '5555555555', '555555555555', 'Impulse Street 3', '321', 'Medieval Realm', 'Floor 27', 'SAO', '56789-012', 'yuuki@sao.com', 3),
('66666666666', 'Agil', '6666666666', '444444444444', 'Merchant Lane 7', '777', 'Starting City', 'Floor 1', 'SAO', '34567-890', 'agil@sao.com', 3),
('77777777777', 'Silica', '7777777777', '333333333333', 'Pet Street 2', '222', 'Beast Village', 'Floor 47', 'SAO', '23456-789', 'silica@sao.com', 3),
('88888888888', 'Lisbeth', '8888888888', '222222222222', 'Smith Road 4', '444', 'Blacksmith Area', 'Floor 55', 'SAO', '76543-210', 'lisbeth@sao.com', 3),
('99999999999', 'Klein', '9999999999', '111111111111', 'Guild Street 6', '999', 'Starting City', 'Floor 1', 'SAO', '89012-345', 'klein@sao.com', 3),
('10101010101', 'Yui', '1010101010', '101010101010', 'System Avenue 8', '1010', 'Floating Castle', 'Floor 75', 'SAO', '67890-123', 'yui@sao.com', 3);



INSERT INTO clientes (cli_cpf, cli_telefone, cli_celular, cli_endereco, cli_numero, cli_bairro, cli_cidade, cli_uf, cli_cep, cli_email, usu_prior) VALUES
('12345678901', '1111111111', '999999999999', 'Customer Street 1', '123', 'Downtown', 'São Paulo', 'SP', '12345-678', 'customer1@email.com', 3),
('98765432109', '2222222222', '888888888888', 'Shopping Avenue 5', '555', 'Botanical Garden', 'Rio de Janeiro', 'RJ', '98765-432', 'customer2@email.com', 3),
('11112222333', '3333333333', '777777777777', 'Delivery Road 9', '789', 'Industrial Village', 'Campinas', 'SP', '54321-678', 'customer3@email.com', 3),
('44445555666', '4444444444', '666666666666', 'Merchandise Avenue 12', '666', 'Copacabana', 'Rio de Janeiro', 'RJ', '45678-901', 'customer4@email.com', 3),
('88887777666', '5555555555', '555555555555', 'Consumer Street 3', '321', 'Barra da Tijuca', 'Rio de Janeiro', 'RJ', '56789-012', 'customer5@email.com', 3),
('99998888777', '6666666666', '444444444444', 'User Avenue 7', '777', 'Itaim Bibi', 'São Paulo', 'SP', '34567-890', 'customer6@email.com', 3),
('33332222111', '7777777777', '333333333333', 'Lovers Road 2', '222', 'Downtown', 'São Paulo', 'SP', '23456-789', 'customer7@email.com', 3),
('00001112223', '8888888888', '222222222222', 'Shopping Avenue 4', '444', 'Botafogo', 'Rio de Janeiro', 'RJ', '76543-210', 'customer8@email.com', 3),
('55556667778', '9999999999', '111111111111', 'Customer Street 6', '999', 'Ipanema', 'Rio de Janeiro', 'RJ', '89012-345', 'customer9@email.com', 3),
('22223334455', '1010101010', '101010101010', 'Consumer Avenue 8', '1010', 'Vila Olímpia', 'São Paulo', 'SP', '67890-123', 'customer10@email.com', 3);

INSERT INTO categorias (cat_nome, cat_descricao) VALUES
('Espadas', 'Diversos tipos de espadas usadas no universo de Sword Art Online.'),
('Armas de Arremesso', 'Adagas, lanças e arcos utilizados para ataques à distância.'),
('Armaduras Leves', 'Armaduras mais leves e ágeis para melhor mobilidade.'),
('Armaduras Pesadas', 'Armaduras robustas para maior proteção em batalha.'),
('Poções de Cura', 'Poções para restaurar pontos de vida.'),
('Poções de Energia', 'Poções para restaurar energia e habilidades.'),
('Itens de Suporte', 'Itens diversos para auxiliar em combate e exploração.'),
('Acessórios Mágicos', 'Amuletos e artefatos que concedem poderes mágicos.'),
('Relíquias Encantadas', 'Itens raros com habilidades especiais.'),
('Artefatos Sagrados', 'Itens lendários com poderes únicos e significado especial no jogo.');

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Espada "Dark Repulser"', 'Réplica da espada secundária de Kirito.', 249.99, 15, 1),
('Espada "Lambent Light"', 'Réplica da espada de Asuna.', 349.99, 10, 1),
('Espada "Elucidator"', 'Réplica da famosa espada de Kirito.', 299.99, 20, 1),
('Espada "Night Sky Sword"', 'Réplica da espada de Heathcliff.', 279.99, 12, 1),
('Espada "Libertador"', 'Espadas duplas similares às usadas por Yuuki.', 399.99, 8, 1);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Adaga "Anneal Blade"', 'Uma adaga leve e ágil para ataques rápidos.', 399.99, 20, 2),
('Lança "Guilty Thorn"', 'Uma lança rápida com alcance estendido.', 599.99, 12, 2),
('Florete "Queen''s Knight"', 'Um florete elegante e preciso.', 299.99, 25, 2),
('Kunai "Shadow Strike"', 'Um arremesso rápido e silencioso.', 199.99, 30, 2),
('Arco "Photon Bow"', 'Um arco de alta precisão e velocidade.', 699.99, 10, 2);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Manto de Asuna', 'Uma armadura leve com alta resistência.', 499.99, 10, 3),
('Casaco de Kirito', 'Uma jaqueta leve com proteção reforçada.', 399.99, 15, 3),
('Colete de Lizbeth', 'Um colete leve e resistente.', 299.99, 20, 3),
('Vestimenta de Silica', 'Vestes leves com propriedades mágicas.', 449.99, 12, 3),
('Traje de Sinon', 'Traje leve e aerodinâmico.', 349.99, 18, 3);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Armadura de Chefe de Guilda', 'Uma armadura pesada com defesa máxima.', 899.99, 8, 4),
('Armadura de Kirito', 'Uma armadura pesada com grande resistência.', 799.99, 10, 4),
('Armadura de Asuna', 'Uma armadura pesada com agilidade surpreendente.', 849.99, 9, 4),
('Armadura de Yui', 'Uma armadura pesada com propriedades mágicas.', 999.99, 6, 4),
('Armadura de Alice', 'Uma armadura pesada lendária.', 1299.99, 5, 4);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Poção de Vida Menor', 'Restaura uma pequena quantidade de pontos de vida.', 9.99, 50, 5),
('Poção de Cura Média', 'Cura moderada de pontos de vida.', 19.99, 40, 5),
('Poção de Cura Avançada', 'Cura substancial de pontos de vida.', 29.99, 30, 5),
('Elixir de Regeneração', 'Regenera lentamente os pontos de vida por um período.', 39.99, 20, 5),
('Poção da Cura Instantânea', 'Cura imediata e completa dos pontos de vida.', 49.99, 15, 5);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Poção de Energia Básica', 'Restaura uma pequena quantidade de energia.', 9.99, 50, 6),
('Poção de Energia Média', 'Restaura uma quantidade moderada de energia.', 19.99, 40, 6),
('Poção de Energia Avançada', 'Restaura uma quantidade substancial de energia.', 29.99, 30, 6),
('Elixir Revigorante', 'Aumenta gradativamente os pontos de energia por um período.', 39.99, 20, 6),
('Poção de Energia Total', 'Restaura toda a energia instantaneamente.', 49.99, 15, 6);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Mapa de Teletransporte', 'Item que permite o teletransporte para locais conhecidos.', 99.99, 5, 7),
('Pergaminho de Recuperação', 'Restaura pontos de vida e energia após uso.', 49.99, 10, 7),
('Corda de Escalada', 'Auxilia na escalada de terrenos íngremes.', 29.99, 15, 7),
('Kit de Primeiros Socorros', 'Recuperação rápida de pontos de vida em emergências.', 39.99, 8, 7),
('Pergaminho de Identificação', 'Revela informações sobre itens ou locais ocultos.', 19.99, 20, 7);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Colar da Cura', 'Amuleto que aumenta a eficácia das poções de cura.', 129.99, 5, 8),
('Anel da Resistência', 'Concede resistência a ataques mágicos.', 149.99, 8, 8),
('Bracelete da Agilidade', 'Aumenta a velocidade de movimento do jogador.', 99.99, 12, 8),
('Talisman do Poder', 'Aumenta a força e o poder de ataque.', 119.99, 6, 8),
('Amuleto do Conhecimento', 'Aumenta a experiência ganha em batalhas.', 79.99, 10, 8);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Cristal da Clarividência', 'Revela informações ocultas no mapa.', 199.99, 3, 9),
('Pedaço da Espada Divina', 'Fragmento de uma lendária espada.', 299.99, 4, 9),
('Orbe da Proteção', 'Concede proteção adicional temporária.', 249.99, 5, 9),
('Relíquia do Arcano', 'Item místico com poderes mágicos.', 399.99, 2, 9),
('Chave dos Antigos', 'Abre portais para locais secretos.', 149.99, 6, 9);

INSERT INTO produtos (prod_nome, prod_descricao, prod_preco, prod_estoque, cat_codigo) VALUES
('Lâmina do Herói', 'Espada lendária com poderes divinos.', 999.99, 1, 10),
('Escudo do Protetor', 'Escudo que bloqueia qualquer ataque.', 1199.99, 1, 10),
('Coroa da Ascensão', 'Coroa que aumenta todas as habilidades do jogador.', 1499.99, 1, 10),
('Cetro do Infinito', 'Concede poderes para controlar o tempo.', 1999.99, 1, 10),
('Artefato do Destino', 'Item que determina o desfecho de batalhas cruciais.', 2499.99, 1, 10);

