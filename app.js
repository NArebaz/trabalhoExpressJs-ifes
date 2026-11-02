const express = require("express");
const app = express();

const Livros = require("./Livros");
const Usuarios = require("./Usuarios");
const Emprestimos = require("./Emprestimos");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/Livros", Livros);
app.use("/Usuarios", Usuarios);
app.use("/Emprestimos", Emprestimos);

app.get("/", (req, res) => {
  function menu() {
    while (true) {
      res.send(`
    <center>
    <h1> SISTEMA DE BIBLIOTECA</h1>
    </center>
    <center>
    <ul>
    <li><a href='/Livros'> Livros </a></li>
    <li><a href='/Usuarios'> Usuarios </a></li>
    <li><a href = '/Emprestimos> Emprestimos de livros </a></li>
    </ul>
    </center>
    `);
    }
  }
  menu();
});
app.listen(80, () => {
  console.log("servidor rodando em http://127.0.0.1");
});
