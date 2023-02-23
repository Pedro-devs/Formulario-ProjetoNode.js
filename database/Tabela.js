//isso é um model, é aqui que faremos as tabelas do nosso banco de dados
const Sequelize = require("sequelize");
const connection = require("./database");

const Tabela = connection.define("tabela", {
    
    nome: {
        type: Sequelize.STRING,
        allowNull: false //esse campo impede de receber valores vazios no meu banco de dados
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }


});  

//then é excecutado quando a tabela é criada
Tabela.sync({force:false}).then(() =>{});//esse force false, ele nao vai forçar a criaçao da tabela caso ela já exista
//isso vai sincronizar oque está nesse arquivo com o banco de dados
//passando os dados acima para o banco de dados
// e para excecutar isso precisamos exportar no index.js que quando excecutar o index.js também irá excecutar essa tabela
module.exports = Tabela;
  