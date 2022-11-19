// Conexão MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.238.139/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {

    console.log("Estamos conectado ao MongoDB !")
});

// Criar eschema
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

//Criar model
const Pessoa = mongoose.model("Pessoa", pessoaSchema);

/* const joao = new Pessoa({
    nome: "João",
    idade: 25,
    profissao: "Estagiário"
}); */

// Inserir dados
/*joao.save(function(err) {
if (err) {

    console.log(err)
}
}) */

//joao.save()

// Encontrando dados

/* Pessoa.findOne({ nome: "João" }, function(err, pessoa) {
console.log(pessoa)
}); */

// Encontrar um dado usando uma função

/*
async function getPessoa(nome) {
    const pessoa = await Pessoa.find({
        nome: nome
    }).exec();
    if (pessoa.length === 0) {
        console.log("Esta pessoa não existe")
    } else {
        console.log(pessoa);
    }
}

getPessoa("Pedro"); * /

// Inserindo diversos dados
/* Pessoa.insertMany([
    { nome: "Pedro", idade: 40, profissao: "Engenheiro" },
    { nome: "Pedro", profissao: "Advogada" },
    { nome: "Pedro", idade: 40 }
]); */ //


// Resgatar dados - Get dados
/* async function getPessoa() {
    const pessoas = await Pessoa.find({}).exec()
    console.log(pessoas);
}

getPessoa(); */


// Deletar um dado 
//Pessoa.deleteOne({ nome: "Peedro" }).exec();

// Deletando varios dados caso esteja repetido
// Pessoa.deleteMany({ nome: "Pedro" }).exec();

// Atualizar um dado
// Pessoa.updateOne({ nome: "João" }, { profissao: "Juiz" }).exec()    

// Ultilizando WHERE 
async function getPessoaNomeIdade(nome, idade) {
    const pessoa = await Pessoa
        .where('idade').gte(idade)
        .where('nome', nome)
        .exec()

    if (pessoa.length === 0) {
        console.log("Esta pessoa não existe!");
    } else {
        console.log(pessoa)
    }
}

getPessoaNomeIdade("João", 20);