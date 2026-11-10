const express = require('express');
const style = require('./style');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const listaDeUsuários = [];

router.get('/' , (req,res) => {
    res.send (`
        ${style}
        <center>
        <h1>Usuarios!</h1>
        <p> Aqui pode-se <strong> Cadastrar usuários, listar , deletar , editar </strong> e <strong>realizar a recuperação de senha ou nome de usuários</strong></p>
        <ul>
        <li><a href='/Usuarios/cadastro'> Cadastro de Usuários</a></li>
        <li><a href='/Usuarios/listar'> Listar Usuários </a></li>
        <li><a href='/Usuarios/deletar'> Deletar Usuários </a></li>
        <li><a href='/Usuarios/editar'> Editar Usuários </a></li>
        <li><a href='/Usuarios/recuperacao'> Recuperação de senha ou Usuário </a></li>
        </ul>
        <a href='/'> Voltar </a>
        </center>
        `)    
});

router.get('/cadastro' , (req,res)=>{
    function CadastrarUsuario (){
        res.send ( `
            ${style}
    <form action='/cadastro' method='POST'>
    <center>
    <hr>
    <br>
    <h1> Faça o cadastro de usuários </h1>
    <p> insira os dados abaixo : </p >
    <br>
    <hr>
    <label> 
    <input  type='text' name = 'nome' placeholder = 'Digite o nome do usuário'><br>
    </label>
    <label>
    <input type='number' name='idade' placeholder = 'digite a idade do usuário'><br>
    </label>
    <label>
    <input type='date' name='dataDeNascimento' placeholder = 'digite a data de nascimento do usuário'><br>
    </label>
    <label>
    <input type='email' name='email' placeholder = 'digite o email do usuário'><br>
    </label>
    <label>
    <input type = 'password' name= 'senha' placeholder ='digite a senha de acesso do usuário'><br>
    </label>
    <button type = 'submit'> Cadastrar Usuário </button><br>
    </form>
    <a href = '/'> Voltar </a><br>
    </center>
    `);
        }
        CadastrarUsuario();
});

router.post ('/cadastro' , (req,res) => {
        let {nome,idade,dataNascimento,email,senha} = req.body;
        let novoUsuario = {
            id: listaDeUsuários.length + 1,
            nome,
            idade,
            dataNascimento,
            email,
            senha,
        }
        listaDeUsuários.push(novoUsuario);

        res.send (`
            ${style}
            <center>
            <h2> Usuário ${novoUsuario.nome} de id: ${novoUsuario.id} cadastrado com sucesso! </h2>
            <a href ='/'> Voltar </a>
            </center>
            `)
    });

router.get ('/listar' , (req,res) => {
    let linhasTabela = '';

    for (let i = 0 ; i < listaDeUsuários.length ; i++){
        linhasTabela += `
        <tr>
        <td> ${listaDeUsuários[i].id} </td>
        <td> ${listaDeUsuários[i].nome} </td>
        <td> ${listaDeUsuários[i].idade} </td>
        <td> ${listaDeUsuários[i].dataNascimento} </td>
        <td> ${listaDeUsuários[i].email} </td>
        <td> ${listaDeUsuários[i].senha} </td>
        </tr>`
    }
    res.send (`
        ${style}
        <center> 
        <h1> Lista de usuários </h1>
        <table>
        <thead>
        <tr>
        <th> Id </th>
        <th> nome </th>
        <th> idade </th>
        <th> data de nascimento </th>
        <th> email </th>
        <th> senha </th>
        </tr>
        </thead>
        <tbody>
        ${linhasTabela}
        </tbody>
        </table>
        <br>
        <a href ='/'> voltar </a>
        `);
});

router.get ('/deletar' , (req,res) => {
    function DeletarUsuario (){
         res.send ( `
        ${style}
            <form action='/deletar' method='POST'>
            <center>
            <h1> Exclusão de usários </h1>
            <p> Para Deletar/Excluir Usuários, digite o Id do qual deseja deletar </p><br>
            <label> Id:
            <input type='number' name='id' placeholder='id do usuário'>
            </label>
            <button type='submit'> Deletar </button>
            </form>
            <a href='/'> Voltar </a>
            </center>
    `);
    }
    DeletarUsuario();
});

router.post ('/deletar' , (req,res)=> {
    let id = Number(req.body.id);
    let achou = false;

    for (let i = 0 ; i < listaDeUsuários.length ; i++){
        if (listaDeUsuários[i].id == id){
            achou = true;
            listaDeUsuários.splice (i , 1);
            break
        }
    }

    if (achou){
        res.send (`
            ${style}
            <center>
            <h2>Usuário de id ${id} deletado com sucesso!</h2>
            </center>
            `);
    } else  {
        res.send (`
            ${style}
            <center>
            <h2> Usuário nao encontrado </h2>
            </center>
            <a href ='/' > Voltar </a>
            `);
    }
});

router.get ('/recuperacao', (req,res)=>{
    res.send(`
        ${style}
        <center>
        <h1>Recuperação de usuário</h1>
        <p>Funcionalidade em desenvolvimento.</p>
        <a href='/Usuarios'>Voltar</a>
        </center>
    `)
});

module.exports = router;