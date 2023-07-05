const express = require('express');
var router = express.Router();
const galeriaModel = require('../model/galeria/GaleriaModel');
const ResponseClass = require('../model/ResponseClass');

router.get('/', function (req, resp, next){
    galeriaModel.getAll(function (erro, retorno){
        let resposta = new ResponseClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro.";
        }else{
            resposta.dados = retorno;
        }
        resp.json(resposta);
    });
});
module.exports = router;