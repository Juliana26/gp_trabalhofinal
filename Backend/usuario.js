exports.servicoUsuario = function servicoUsuario(app, MongoClient, url) {
  app.route('/api/usuario/:name').get((req, res) => {
    var query = { nome: req.params.name };
    console.log(this.req);
    console.log(this.res);
    //-------------------base de dados-----------------
    MongoClient.connect(url, function (err, db) {
      if (err) console.log(err);
      var dbo = db.db("gp_trabalhofinal");
      dbo.collection("usuarios").find(query).toArray(function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
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



