const servUsuario = require('./usuario')
const express = require('express');
const app = express();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/GP_TRABALHOFINAL";
const corsOptions = {//PARA RECEBER REQUISIÇOES APENAS DA APLICAÇÃO
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.listen(8000, () => {//FICA AGUARDANDO REQUISIÇÕES
    console.log("servidor rodando");
    servUsuario.servicoUsuario(app,MongoClient,url);//CHAMA OS SERVIÇOS DE USUÁRIO
});



