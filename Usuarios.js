const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const listaDeUsuários = [];

router.get('/' , (req,res) => {
    res.send (`
        <center>
         <form action='/Usuarios/cadastro' method='POST'>
        <h1>Usuarios!</h1>
        <center>
        <ul>
        <li><a href='/Usuarios/cadastro'> Cadastro de Usuários</a></li>
        <li><a href='/Usuarios/listar'> Listar Usuários </a></li>
        <li><a href='/Usuarios/deletar'> Deletar Usuários </a></li>
        <li><a href='/Usuarios/editar> Editar Usuários </a></li>
        <li><a href='/'>Voltar </a></li>
        </ul>
        `)    
});

router.post('/', (req,res)=> {
    res.send('Liste e cadastre usuários!') 
});

module.exports = router;