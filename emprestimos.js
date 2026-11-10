const express = require("express");
const { route } = require("./Livros");
const style = require("./style");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const ListaDeEmprestimos = [];

router.get("/", (req, res) => {
  function menu() {
    res.send(`
        ${style}
        <center>
        <h1> Consulte quais livros estão em empréstinmo e solicite empréstimos de livros </h1>
        <hr>
        <p> selecione uma opcão abaixo: </p>
        <ul>
        <li><a href='/Emprestimos/solicitar'> solicitar empréstimos </a></li>
        <li><a href='/Emprestimos/consultar'> consultar empréstimos e prazos de entrega </a></li>
        </ul>
         <a href='/'>Voltar</a>
        </center>
        `);
  }
  menu();
});
router.get("/solicitar", (req, res) => {
  res.send(`
        ${style}
        <hr>
        <form action='/Emprestimos/solicitar' method='POST'>
        <h1> Solicitação de emprestimos de livros </h1>
        <p> Para solicitar o emprestimos do livro, digite o ID do livros e vamos conferir se ele está disponivel! </p>
        <label> Id do livro: <input type='number' name='id' placeholder='Id do livro'></label>
        <label> Id do Usuário: <input type='number' name='idUsuario' placeholder='Id do usuário'></label>
        <label> Quantidade : <input type='text' name='quantidade' placeholder='Digite a quantidade que necessita realizar emprestimo:'></label><br>
        <button type='submit'> Solicitar emprestimo </button>
        `);
});
router.post("/solicitar", (req, res) => {
  const idUsuario = (req.body.idUsuario)
  const id = Number(req.body.id);
  const quantidade = Number(req.body.quantidade);

  let livroEncontrado;

  if (
    !Number.isInteger(id) ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0
  ) {
    return res.send(`${style}<h2>Digite valores válidos!</h2>`);
  }

  for (let i = 0; i < listaDeLivros.length; i++) {
    if (listaDeLivros[i].id == id) {
      livroEncontrado = listaDeLivros[i];
      break;
    }
  }

  if (!livroEncontrado) {
    return res.send(`
            ${style}
            <h2>Livro de ID ${id} não encontrado!</h2>
        `);
  }

  if (livroEncontrado.quantidade < quantidade) {
    return res.send(`
            ${style}
            <h2>Quantidade indisponível!</h2>
            <p>Disponível: ${livroEncontrado.quantidade}</p>
        `);
  }

  livroEncontrado.quantidade -= quantidade;

  ListaDeEmprestimos.push({
    idLivro: id,
    quantidade: quantidade,
    idUsuario:idUsuario,
  });

  res.send(`
        ${style}
        <h1>Empréstimo realizado com sucesso!</h1>
        <p>Emprestado para: ${idUsuario}
        <p>Livro: ${livroEncontrado.titulo}</p>
        <p>Quantidade emprestada: ${quantidade}</p>
        <p>Quantidade restante: ${livroEncontrado.quantidade}</p>
        <a href="/Emprestimos">Voltar</a>
    `);
});
module.exports = router;