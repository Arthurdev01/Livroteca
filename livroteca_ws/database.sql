-- Script de criação do banco de dados Livroteca

-- Tabela de usuários
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

-- Tabela de biblioteca
CREATE TABLE biblioteca (
    id_biblioteca SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

-- Tabela de categoria
CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL
);

-- Tabela de livro
CREATE TABLE livro (
    id_livro SERIAL PRIMARY KEY,
    id_biblioteca INT NOT NULL,
    id_categoria INT NOT NULL,
    autor VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    data_inclusao DATE NOT NULL DEFAULT CURRENT_DATE,
    FOREIGN KEY (id_biblioteca) REFERENCES biblioteca(id_biblioteca) ON DELETE CASCADE,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria) ON DELETE CASCADE
);

-- Tabela de resenha
CREATE TABLE resenha (
    id_resenha SERIAL PRIMARY KEY,
    id_livro INT NOT NULL,
    nota INT NOT NULL CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    data_resenha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_livro) REFERENCES livro(id_livro) ON DELETE CASCADE
);

-- Inserção das categorias iniciais
INSERT INTO categoria (nome_categoria) VALUES
('Ficção'),
('Não-Ficção'),
('Romance'),
('Fantasia'),
('Ciência Ficção'),
('Biografia'),
('História'),
('Autoajuda'),
('Tecnologia'),
('Educação'),
('Saúde'),
('Arte'),
('Culinária'),
('Viagem'),
('Esportes'),
('Negócios'),
('Religião'),
('Poesia'),
('Drama'),
('Aventura');

