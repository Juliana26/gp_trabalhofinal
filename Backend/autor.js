exports.servicoAutor = function servicoAutor(service, app, MongoClient, url, base, colecao) {
    //buscar dados autor por nome
    app.route('/api/' + service + '/getnome/:nome').get((req, res) => {
      var query = { "nome": req.params.nome };
      //-------------------base de dados-----------------
      MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) console.log(err);
        var dbo = db.db(base);
        dbo.collection(colecao).find(query).toArray(function (err, result) {
          if (err) console.log(err);
          res.send(result);
          db.close();
        });
      });
      //--------------------------------------------------
    });
    //inserir novo autor
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
        res.send({ success: true, message: 'inserido com sucesso' });
      });
      //-----------------------------------------------
    });
    //altera autor por nome
    app.route('/api/' + service + '/update/:nome').put((req, res) => {
      var myquery = { "nome": req.params.nome };
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
        res.send({ success: true, message: 'alterado com sucesso' });
      });
      //-------------------------------------------------
    });
    //remover autor por nome
    app.route('/api/' + service + '/remove/:nome').delete((req, res) => {
      var myquery = { "nome": req.params.nome };
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
      res.send({ success: true, message: 'deletado com sucesso' });
    });
  };
  
  
  
  