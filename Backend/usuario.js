const express = require('express');

const app = express();

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors(corsOptions))

app.listen(8000, () => {
  console.log("servidor rodando");
  app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
  });

  app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
  });

  app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });

  app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
  });
});



