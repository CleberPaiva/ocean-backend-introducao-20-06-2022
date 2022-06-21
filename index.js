const express = require("express");
const app = express();

//Informa que esta senso usado o json
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro", "Homem Aranha", "Super Homem"];

// Endpoint Read All - [GET] /herois
app.get("/herois", function (req, res) {
  res.send(herois);
});

// Endpoint Read by ID - [GET] /herois/:id
app.get("/herois/:id", function (req, res){
  const id = req.params.id;

  const item = herois[id - 1];

  res.send(item);
  console.log(item);
});

// Endpoint Create - [Post] /herois
app.post("/herois", function (req, res){
  console.log(req.body.nome);

  // Acessa o nome do herói no corpo da requisição
  const item = req.body.nome;

  // Insere o item no array
  herois.push(item);

  console.log(herois);
  res.send("Item inserido com sucesso!");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);


