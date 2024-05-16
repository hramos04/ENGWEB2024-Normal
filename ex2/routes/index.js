var express = require('express');
var router = express.Router();
var axios = require('axios')

var d = new Date().toISOString().substring(0, 16)

router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
      .then(data => res.render("paginaPrincipal", {"contratos": data.data, "d": d}))
      .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(data => res.render("paginaContrato", {"contrato": data.data}))
    .catch(erro => res.status(502).jsonp(erro))
});

router.get('/entidades/:nipc', function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.nipc)
    .then(data => res.render("paginaEntidade", {"entidade": data.data,"d":d}))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
