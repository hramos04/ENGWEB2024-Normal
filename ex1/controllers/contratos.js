const mongoose = require('mongoose')
var Contrato = require("../models/contratos")

// GET /contratos
module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

// GET /contratos/:id
module.exports.findById = id => {
    return Contrato
        .findOne({idcontrato : id})
        .exec()
}

// GET /contratos?entidade=EEEE
module.exports.listContratoByEntidade = (entidade) => {
    return Contrato
        .find({"NIPC_entidade_comunicante": entidade})
        .exec()
}

// GET /contratos?tipo=AAA
module.exports.listContratoByTipo = (tipo) => {
    return Contrato
        .find({"tipoprocedimento": tipo})
        .exec()
}

// GET /contratos/entidades
module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec()
}

//  GET /contratos/tipos
module.exports.listTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec()
}

// POST /contratos
module.exports.insert = contrato => {
    return Contrato.create(contrato)
}


// DELETE /contratos/:id
module.exports.remove = id => {
    return Contrato
        .deleteOne({_id : id})
        .exec()
}

// PUT /contratos/:id
module.exports.update = (id, contrato) => {
    return Contrato
        .findOneAndUpdate({_id : id}, contrato)
        .exec()
}