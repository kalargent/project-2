var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

    // Create a new user
    app.post("/api/users", function(req, res) {
      console.log(req.body);
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });

  // Create a new product
  app.post("/api/products", function(req, res) {
    db.Product.create(req.body).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  // app.get("/api/products", function(req,res){
  //   console.log("you're app get")
  // })

  // Delete an example by id
  app.delete("/api/products/:id", function(req, res) {
    db.Product.destroy({ where: { id: req.params.id } }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });
};
