exports.servicoUsuario = function servicoUsuario(service, app, MongoClient, url, base, colecao) {
  //buscar dados usuário por login
  app.route('/api/' + service + '/getlogin/:login').get((req, res) => {
    var query = { "login": req.params.login };
    console.log(req.params.login);
    //-------------------base de dados-----------------
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) console.log(err);
      var dbo = db.db(base);
      dbo.collection(colecao).find(query).toArray(function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
        db.close();
      });
    });
    //--------------------------------------------------
  });
  //buscar dados usuário por nome
  app.route('/api/' + service + '/getnome/:nome').get((req, res) => {
    var query = { "nome": req.params.nome };
    console.log(req.params.nome);
    //-------------------base de dados-----------------
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) console.log(err);
      var dbo = db.db(base);
      dbo.collection(colecao).find(query).toArray(function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result);
        db.close();
      });
    });
    //--------------------------------------------------
  });
  //inserir novo usuário
  app.route('/api/' + service + '/insert/').post((req, res) => {
    var myobj = req.body;
    //--------------------base de dados--------------
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
      res.send({ success: true, message: 'Inserido com sucesso' });
    });
    //-----------------------------------------------
  });
  //altera usuário por login
  app.route('/api/' + service + '/update/:login').put((req, res) => {
    var myquery = { "login": req.params.login };
    delete req.body._id;
    var newvalues = { $set: req.body };
    console.log(myquery);
    console.log(newvalues);
    //--------------------base de dados---------
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
      res.send({ success: true, message: 'Alterado com sucesso' });
    });
    //-------------------------------------------------
  });

  app.route('/api/' + service + '/remove/:login').delete((req, res) => {
    var myquery = { "login": req.params.login };
    //--------------------base de dados---------------
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });
    });
    //--------------------------------------------
    res.send({ success: true, message: 'Deletado com sucesso' });
  });
};



