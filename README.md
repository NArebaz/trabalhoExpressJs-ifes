# Trabalho ExpressJS - IFES

Projeto de estudo sobre Express.js e Node.js, desenvolvido para gerenciar livros, usuários e empréstimos em uma biblioteca.

## Descrição

Este sistema oferece uma API/Interface web simples com rotas para:

- Cadastro, listagem, edição e exclusão de livros
- Cadastro, listagem e exclusão de usuários
- Solicitação e consulta de empréstimos

## Tecnologias

- Node.js
- Express.js
- JavaScript

## Estrutura do projeto

- `index.js` — arquivo principal da aplicação
- `Livros.js` — rotas e lógica dos livros
- `Usuarios.js` — rotas e lógica dos usuários
- `emprestimos.js` — rotas e lógica de empréstimos
- `style.js` — estilos HTML usados nas páginas

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie a aplicação:

```bash
node index.js
```

3. Acesse no navegador:

```text
http://localhost/
```

## Rotas principais

- `/` — menu principal
- `/Livros` — gerenciamento de livros
- `/Usuarios` — gerenciamento de usuários
- `/Emprestimos` — gerenciamento de empréstimos

## Observações

- O projeto foi desenvolvido como exemplo didático para praticar rotas, formulários e manipulação de dados em memória.
- A aplicação usa arrays em memória para armazenar os registros, então os dados são resetados ao reiniciar o servidor.
