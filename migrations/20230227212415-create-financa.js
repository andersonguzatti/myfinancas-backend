'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE,
        validate:{
          notEmpty: {msg:"Campo de data não pode ser vazio"}
        }
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate:{
          notEmpty: {msg:"Campo Categoria não pode ser vazio"}
        }
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING,
        validate:{
          notEmpty: {msg:"Campo de título não pode ser vazio"}
        },
        references:{
          model: "Categoria",
          key:"id"
        },
        onUpdate:'cascade',
        onDelete: 'cascade'
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate:{
          notEmpty: {msg:"Campo de valor não pode ser vazio"}
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financas');
  }
};