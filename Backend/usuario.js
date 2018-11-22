exports.servicoUsuario = function servicoUsuario(app, MongoClient, url) {
  app.route('/api/cats/:name').get((req, res) => {
    //-------------------base de dados-----------------
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var query = { nome: req };
      db.collection("usuario").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send({ name: result });
        db.close();
      });
    });
    //--------------------------------------------------
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
};



