var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
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
      }).then(function(dbUser) {
        console.log(dbUser);
        // res.send(dbUser);
        res.render("userRegistry", dbUser);
      });
    } else {
      res.render("index");
    }
  });

  app.get("/registry/:id", function(req, res) {
    console.log("this is number " + req.params.id);  
    if (parseInt(req.params.id)) {
      db.Product.findAll({
        where: {
          userId: parseInt(req.params.id)
        },
        include: [db.User]
      }).then(function(products) {
        console.log(products);
        res.render("registry", 
        {
          products: products
        });
      });
    } else {
      res.render("index");
    }
  });

  // app.get("/registry", function (req, res) {
  //   db.Product.findAll({

  //   }).then(function (dbProduct) {
  //     var productObj = {
  //       Products: dbProduct
  //     }
  //     res.render("registry", productObj);
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
