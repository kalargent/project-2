var db = require("../models");

module.exports = function(app) {
 // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/registry", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct){
      var productObj ={
        Products: dbProduct
      }
    res.render("registry", productObj);
    }); 
  });

  // app.get("/:user", function (req, res){
  //   db.users.findOne({
  //     where: {
  //       firstName: req.body
  //     }, 
  //     include: [db.Product]
  //   }).then (function (dbUser) {
  //     // res.json(dbUser); 
  //     res.render("userRegistry"); 
  //     console.log("you returned a user"); 
  //     console.log(dbUser); 
  //   })
  // })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
