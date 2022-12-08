import Sequelize  from "sequelize"; 

// o banco de dados 
import componenteSequelize from "./db.mjs";

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
); 