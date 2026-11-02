
const express = require("express");
const router = express.Router();

const listaDeLivros = [];

router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send(`
        <center>
        <h1>Faça ações gerais com livros!</h1>
        <p>Aqui pode-se: <strong>Cadastrar Livros</strong>, <strong>Editar livros</strong>, <strong>Excluir</strong>, <strong>Consultar</strong> e <strong>realizar empréstimos</strong></p>
        <ul>
        <li><a href='/Livros/cadastro'>Faça cadastro de livros</a></li>
        <li><a href='/Livros/editar'>Faça edição de livros</a></li>
        <li><a href='/Livros/deletar'>Exclua livros</a></li>
        <li><a href='/Livros/consultar'>Liste os livros disponíveis </a></li> 
        </ul>
        </center>
    `);
});

////////////// cadastro de livros //////////////////

router.get("/cadastro", (req, res) => {
  function CadastrarLivro() {
    res.send(`
            <center>
            <h1>Cadastro de livros</h1>

            <form action='/Livros/cadastro' method='POST'>
            <hr>

            <label>Título: <input type='text' name='titulo' placeholder='Digite o título do livro' required></label><br>

            <label>Descrição: <input type='text' name='desc' placeholder='Digite a descrição do livro' required></label><br>

            <label>Ano de publicação: <input type='number' name='anoPubli' placeholder='Digite o ano de publicação' required></label><br>

            <label>Autor: <input type='text' name='autor' placeholder='Digite o nome do autor' required></label><br>

            <label>Páginas: <input type='number' name='paginas' placeholder='Digite o número de páginas' required></label><br>

            <label>Editora: <input type='text' name='editora' placeholder='Digite o nome da editora' required></label><br>

            <label>Gênero: <input type='text' name='genero' placeholder='Escreva o gênero do livro' required></label><br>

            <label>Quantidade: <input type='number' name='quantidade' placeholder='Escreva a quantidade de livros' required></label><br>

            <button type='submit'>Cadastrar livro</button><br>

            </form>

            <a href='/Livros'>Voltar</a><br>
            </center>
            <hr>
        `);
  }

  CadastrarLivro();
});

router.post("/cadastro", (req, res) => {
  let { titulo, desc, anoPubli, paginas, editora, genero, quantidade, autor } =
    req.body;

  let novoLivro = {
    id: listaDeLivros.length + 1,
    desc,
    titulo,
    anoPubli,
    paginas,
    editora,
    genero,
    quantidade: Number(quantidade),
    disp: Number(quantidade),
    autor,
  };

  listaDeLivros.push(novoLivro);

  res.send(`
        <center>
        <h2>Livro ${novoLivro.titulo} (ID: ${novoLivro.id}) cadastrado com sucesso!</h2>
        <a href='/Livros'>Voltar</a>
        </center>
    `);
});

//////// edição de livros ////////

router.get("/editar", (req, res) => {
  function EditarLivro() {
    res.send(`
        <center>
        <h1>Atualização de livros</h1>
        <p>Para atualizar, primeiro, digite o ID do livro.</p>

        <form action='/Livros/editar' method='POST'>

        <label>ID do livro:
        <input type='number' name='id' placeholder='ID do livro' required>
        </label><br>

        <label>Quantidade:
        <input type='number' name='quantidade' placeholder='Digite a quantidade' required>
        </label><br>

        <button type='submit'>ATUALIZAR</button>
        </form>

        <a href='/Livros'>Voltar</a>
        </center>
    `);
  }

  EditarLivro();
});

router.post('/editar', (req, res) => {
    let { id, quantidade } = req.body;
    let achou = false;

    for (let i = 0; i < listaDeLivros.length; i++) {
        if (listaDeLivros[i].id == id) {
            listaDeLivros[i].quantidade = Number(quantidade);
            listaDeLivros[i].disp = Number(quantidade);
            achou = true;
            break;
        }
    }

    if (achou) {
        res.send(`
            <center>
            <h2>Livro de ID (${id}) atualizado com sucesso!</h2>
            <a href='/Livros'>Voltar</a>
            </center>
        `);
    } else {
        res.send(`
            <center>
            <h2>Erro ao encontrar livro de ID ${id}</h2>
            <a href='/Livros'>Voltar</a>
            </center>
        `);
    }
});

////// deletar os livros ///////

router.get('/deletar', (req, res) => {
    function deletarLivro() {
        res.send(`
            <center>
            <h2>Deletar livros</h2>
            <hr>

            <form action='/Livros/deletar' method='POST'>

            <label>Informe o ID do livro que deseja deletar:
            <input type='number' name='id' placeholder='ID' required>
            </label><br>

            <button type='submit'>Deletar</button><br>
            <hr>
            </form>

            <a href='/Livros'>Voltar</a>
            </center>
        `);
    }

    deletarLivro();
});

router.post('/deletar', (req, res) => {

    let id = Number(req.body.id);
    let achou = false;

    for (let i = 0; i < listaDeLivros.length; i++) {
        if (listaDeLivros[i].id == id) {
            achou = true;
            listaDeLivros.splice(i, 1);
            break;
        }
    }

    if (achou) {
        res.send(`
            <center>
            <h2>Livro de ID (${id}) deletado com sucesso!</h2>
            <a href='/Livros'>Voltar</a>
            </center>
        `);
    } else {
        res.send(`
            <center>
            <h2>Livro de ID (${id}) não encontrado!</h2>
            <a href='/Livros'>Voltar</a>
            </center>
        `);
    }
//////Listar livros/////////





});

module.exports = router;
