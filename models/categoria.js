'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
 
    static associate(models) {
      this.hasOne(models.Financa, {ForeignKey:"categoria_id"});
    }
  }
  Categoria.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};