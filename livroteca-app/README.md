# Livroteca

Uma aplicação web completa para gerenciamento de biblioteca pessoal, desenvolvida com React, Node.js e MongoDB.

## Sobre o Projeto

Livroteca é uma plataforma moderna e intuitiva para gerenciar sua coleção de livros pessoais. Permite adicionar, editar, organizar e remover livros por categorias, além de escrever resenhas detalhadas e atribuir avaliações para cada livro da sua biblioteca.

## Funcionalidades

- **Gerenciamento de Livros**: Adicione, edite e remova livros da sua coleção com facilidade
- **Categorias Organize seus livros por categorias para uma melhor organização
- **Resenhas**: Escreva resenhas detalhadas e personalizadas para cada livro
- **Avaliações**: Atribua notas de 1 a 5 estrelas aos livros
- **Interface Responsiva**: Acesse sua biblioteca de qualquer dispositivo
- **Design Moderno**: Interface intuitiva com visual atraente e animações suaves
- **Sistema de Autenticação**: Registro e login de usuários

## Tecnologias

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB, Mongoose
- **Estilização**: CSS3 com design moderno e gradientes
- **HTTP Client**: Axios

## Estrutura do Projeto

```
livroteca/
├── livroteca-app/          # Frontend (React)
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── assets/         # Imagens e recursos
│   │   ├── book/          # Componentes de livro
│   │   ├── category/      # Componentes de categoria
│   │   ├── home/          # Página inicial
│   │   ├── library/       # Página da biblioteca
│   │   ├── login/         # Página de login
│   │   ├── register/      # Página de registro
│   │   └── review/        # Componentes de resenha
│   ├── package.json
│   └── README.md
│
└── livroteca_ws/           # Backend (Node.js)
    ├── config/
    │   ├── db.js          # Configuração do MongoDB
    │   └── server.js      # Configuração do servidor
    ├── src/
    │   └── routes/        # Rotas da API
    │       ├── routes_biblioteca.js
    │       ├── routes_categorias.js
    │       ├── routes_livro.js
    │       ├── routes_resenha.js
    │       └── routes_usuario.js
    └── package.json
```

## Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- MongoDB (instância local ou MongoDB Atlas)

### Instalação

1. Clone o repositório para sua máquina local

2. Instale as dependências do frontend:
   ```bash
   cd livroteca-app
   npm install
   ```

3. Instale as dependências do backend:
   ```bash
   cd livroteca_ws
   npm install
   ```

### Executando o Projeto

1. Inicie o backend (na pasta livroteca_ws):
   ```bash
   npm start
   ```
   O servidor estará disponível em `http://localhost:3001`

2. Em outro terminal, inicie o frontend (na pasta livroteca-app):
   ```bash
   npm start
   ```
   A aplicação estará disponível em `http://localhost:3000`

### Configuração do Banco de Dados

O projeto utiliza MongoDB. Você pode:
- Usar MongoDB local安装
- Utilizar o MongoDB Atlas (nuvem)
- Ajustar a string de conexão em `livroteca_ws/config/db.js`

## Credenciais Padrão

- **Email**: admin@livroteca.com
- **Senha**: admin123

## API Endpoints

### Livros
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/livros | Lista todos os livros |
| GET | /api/livros/:id | Obtém um livro específico |
| POST | /api/livros | Cria um novo livro |
| PUT | /api/livros/:id | Atualiza um livro |
| DELETE | /api/livros/:id | Remove um livro |

### Categorias
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/categorias | Lista todas as categorias |

### Resenhas
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /api/resenhas/livro/:livroId | Lista resenhas de um livro |
| POST | /api/resenhas | Cria uma nova resenha |
| PUT | /api/resenhas/:id | Atualiza uma resenha |
| DELETE | /api/resenhas/:id | Remove uma resenha |

### Usuários
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | /api/usuarios/register | Registra um novo usuário |
| POST | /api/usuarios/login | Autentica um usuário |

## Design

O projeto utiliza uma paleta de cores consistente e moderna:

- **Primary**: #4c00ff (Roxo)
- **Primary Dark**: #3a00cc, #2a0099
- **Dark**: #1a1a2e, #16213e (Azul escuro)
- **Light**: #ffffff, #f8f9fa (Branco/Cinza claro)

### Características do Design
- Gradientes suaves nos elementos principais
- Sombras suaves para profundidade
- Animações de transição suaves
- Bordas arredondadas
- Foco visível nos campos de formulário

## Scripts Disponíveis

### Frontend (livroteca-app)
- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a versão de produção
- `npm test`: Executa os testes

### Backend (livroteca_ws)
- `npm start`: Inicia o servidor API
- `npm run dev`: Inicia em modo de desenvolvimento (se configurado)

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ para amantes de livros!

