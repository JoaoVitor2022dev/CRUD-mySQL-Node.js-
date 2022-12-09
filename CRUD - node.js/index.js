

( async () => {
    const database = require('./db'); 
    const Produto = require('./produto')
     

     await database.sync();    
    
    // criaçao de registro   - create 

    await Produto.create( 
        {
            Nome: "Primerio teste",
            DataCriacao: Date()
        }
    );
    await Produto.create( 
        {
            Nome: "segunda teste",
            DataCriacao: Date()
        }
    );
    await Produto.create( 
        {
            Nome: " terceiro teste",
            DataCriacao: Date()
        }
    );

    // alteracao de registro - update 

    const alterProd = await Produto.findByPk(2); 
    alterProd.Nome = "aquivo 2 alterado"; 
    await alterProd.save(); 

   // deletando um resgistro - delete 

   Produto.destroy({where: {id: 1}}); 

   //  selecioado os registros - read 
   
   // registro 3 para olhar ele 
   const findProd = await Produto.findByPk(3); 
   console.log(findProd);

   // ve todos os regisros 
   const findAll = await Produto.findAll(); 
   console.log(findAll);
    

})(); 
