const Sequelize = require("sequelize"); 

const componenteSequelize = new Sequelize('dbProduto','root','P@ssW0rd', 
{
     dialect:'mysql', host: 'localhost' 
}); 

module.exports = componenteSequelize; 

