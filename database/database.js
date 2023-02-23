//para se trabalhar com banco de dados mysql, a melhor maneira é utilizar a biblioteca Squelize, que serve para 
//conectar e manipular os dados do mysql pelo Node.js usando javascript sem precisar usar codigos MYSQL igual INSERT INTO 
//e até mesmo criar tabelas tudo atraves do sequelize com javascript, facilitando nossa vida
const Sequelize = require("sequelize")
const connection = new Sequelize("meubanco", "root", "wRFpL11V", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;