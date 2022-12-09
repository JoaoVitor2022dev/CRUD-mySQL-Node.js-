const Sequelize = require("sequelize"); 

// o banco de dados 
const componenteSequelize = require("./db.js"); 


const Produto = componenteSequelize.define('Produto', 
  {
    id:
    {
      type: Sequelize.INTEGER, 
      autoIncrement: true,
      allowNull : false,
      primaryKey : true
    }, 
    Nome :
    {
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    DataCriacao: 
    {
        type: Sequelize.DATE, 
        allowNull: false, 
    }
  }
) 

module.exports = Produto; 


