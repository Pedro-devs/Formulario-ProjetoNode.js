const express = require("express");
const app = express();
const bodyParser = require("body-parser");//responsavel por traduzir os dados enviados pelo formulario em uma estrutura javascript em que podemos usar no bakcend
const connection = require("./database/database")//exporta nosso objeto de conexão com o banco de dados
const Tabela = require("./database/Tabela");
app.use(express.static('public'))//isso serve para poder usar o css

//BANCO DE DADOS
connection //metodo que vai tentar logar no mysql
  .authenticate()
  .then(() => {//se a conexao for feita com sucesso será excecutado o then
    console.log("Conexão feita com o banco de dados!")
  })
  .catch((msgErro) => { //se falhar aparecerá um erro
    console.log(msgErro)
    console.log("Conexão falhou")
  })

//bodyParser é pra receber os dados do formulario, podendo ser um name por exemplo
app.use(bodyParser.json());//ler dados de formulario via json, usar para trabalhar com API, outra possibilidade
app.use(bodyParser.urlencoded({ extended: true }));//permite que a pessoa envie os dados do formulario e o body-parser vai traduzir essa estrutura em javascript para podermos usar no projeto


//rotas
app.get("/", function (req, res) {//GET para receber os dados do formulario, pegar o HTML 
  res.sendFile(__dirname + '/registrar.html')
});

app.post("/salvarFormulario", function (req, res) { // METEDO POST, colocar as informaçoes do formulario no banco de dados
  res.send("Formulario Recebido !")
  var nome = req.body.nome;
  var email = req.body.email;
  var telefone = req.body.telefone;
  var genero = req.body.genero;
  var nascimento = req.body.nascimento;
  var cidade = req.body.cidade;
  var estado = req.body.estado;
  var endereco = req.body.endereco;

  Tabela.create({//se eu quero salvar um dado de uma tabela eu tenho que pegar o model da tabela que criei no tabela.js, esse metodo create serve para fazer INSERT INTO na tabela
    nome: nome,
    email: email,
    telefone: telefone,
    genero: genero,          //SALVAR DADOS NO BD
    nascimento: nascimento,
    cidade: cidade,
    estado: estado,
    endereco: endereco

  }).then(() => {
    console.log("Formulário recebido !")
  })
    .catch((msgErro) => { //se falhar aparecerá um erro
      console.log(msgErro)
      console.log("Formulário não foi recebido !")
    })

});


Tabela.update(        //METODO UPDATE, ATUALIZAR DADOS
  { nome: "Novo Nome" },
  { where: { id: "null" } })//se não for usar, deixar o espaço escrito "null" para nao deixar a tela poluida no terminal
  .then(() => {
    console.log("Atualizado com sucesso !")
  })
  .catch((msgErro) => { //se falhar aparecerá um erro
    console.log(msgErro)
    console.log("Falha ao atualizar !")
  })


Tabela.destroy({ where: { id: "null" } }) //METODO DELETE,EXCLUIR DADOS DA TABELA
.then(() => {
  console.log("Deletado com sucesso !")
})
.catch((msgErro) => { //se falhar aparecerá um erro
  console.log(msgErro)
  console.log("Falha ao deletar !")
})



app.listen(3000)
console.log("Servidor rodando !")