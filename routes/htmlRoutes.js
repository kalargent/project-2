var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    /**
    1. Check if there is query param
    
    2. Get the data from user
    
    3. Render that page
    
    1. If there isn't query param (else statement)
    
    render the index page
    
    */
    if (req.query.user) {
      db.User.findOne({
        where: {
          id: req.query.user
        },
        include: [db.Product]
      }).then(function (dbUser) {
        console.log(dbUser);
        // res.send(dbUser);
       res.render("userRegistry",
       dbUser)
      });
    } else {
res.render("index");
    }
















    // db.Example.findAll({}).then(function (dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });
  

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/registry", function (req, res) {
    db.Product.findAll({}).then(function (dbProduct) {
      var productObj = {
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

  app.get("/", function (req, res) {
    if (req.query) {
      res.render("userRegistry")
    }
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
