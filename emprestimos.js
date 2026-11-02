const express = require('express');
const { route } = require('./Livros');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const ListaDeEmprestimos = [];

module.exports = router;