exports.servicoUsuario = function servicoUsuario(app, MongoClient, url, base,colecao) {
  //buscar dados usuário por login
  app.route('/api/usuario/getlogin/:login').get((req, res) => {
    var query = { login: req.params.login };
    console.log(req.params.login);
    //-------------------base de dados-----------------
    MongoClient.connect(url, function (err, db) {
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
  app.route('/api/usuario/getnome/:nome').get((req, res) => {
    var query = { nome: req.params.nome };
    console.log(req.params.nome);
    //-------------------base de dados-----------------
    MongoClient.connect(url, function (err, db) {
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
  app.route('/api/usuario/insert/').post((req, res) => {
    var myobj = req.body;
    //--------------------base de dados--------------
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
      res.send({ success: true, message: 'inserido com sucesso' });
    });
    //-----------------------------------------------
  });
  //altera usuário por nome
  app.route('/api/usuario/update/:nome').put((req, res) => {
    var myquery = { nome: req.params.nome };
    delete req.body._id;
    var newvalues = { $set: req.body };
    console.log(myquery);
    console.log(newvalues);
    //--------------------base de dados---------
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
      res.send({ success: true, message: 'alterado com sucesso' });
    });
    //-------------------------------------------------
  });

  app.route('/api/usuario/remove/:nome').delete((req, res) => {
    var myquery = { nome: req.params.nome };
    //--------------------base de dados---------------
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(base);
      dbo.collection(colecao).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });
    });
    //--------------------------------------------
    res.send({ success: true, message: 'deletado com sucesso' });
  });
};



