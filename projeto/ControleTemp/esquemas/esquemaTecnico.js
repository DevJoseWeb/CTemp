// Tecnico - Esquema da cole��o "Tecnico"

var mongoose = require('mongoose');

exports.tecnico = new mongoose.Schema(
  {
    "nome" : {type: String},
    "regId" : {type: String},
    "senha" : {type: String}
  }
);