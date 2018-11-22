exports.servicoUsuario = function servicoUsuario(app, MongoClient, url) {
  //buscar dados usuário por nome
  app.route('/api/usuario/:nome').get((req, res) => {
    var query = { nome: req.params.nome };
    console.log(req.params.nome);
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
  //inserir novo usuário
  app.route('/api/usuario/insert/').post((req, res) => {
    var myobj = req.body;
    console.log('meu objeto' + myobj);
    //--------------------base de dados--------------
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("gp_trabalhofinal");
      dbo.collection("usuarios").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        res.send(201, "inserido");
        db.close();
      });
    });
    //-----------------------------------------------
    res.send(201, req.body);
  });

  app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });

  app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
  });
};



