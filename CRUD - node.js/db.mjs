import Sequelize  from "sequelize";

const componenteSequelize = new Sequelize('dbProduto','root','P@ssW0rd', 
{
     dialect:'mysql', host: 'localhost' 
}); 

export default componenteSequelize; 

