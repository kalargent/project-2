var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new user
  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new product
  app.post("/api/products", function (req, res) {
    db.Product.create(req.body).then(function (dbProduct) {
      console.log(dbProduct);
      res.json(dbProduct);
    });
  });

  // For the tests 
  app.get("/api/products", function (req, res) {
    db.Product.findAll({}).then(function (dbProduct) {
      res.json(dbProduct)
    });
  })

<<<<<<< HEAD
  // app.get("/", function (req, res) {
  // console.log(req.params);
  // db.users.findOne({
  //   where: {
  //     firstName: req.body
  //   }, 
  //   include: [db.Product]
  // }).then (function (dbUser) {
  //   res.json(dbUser); 
  //   console.log("you returned a user"); 
  //   console.log(dbUser); 
  // })
  // res.json({});
  //})

  // Delete an example by id
  app.delete("/api/products/:id", function (req, res) {
    db.Product.destroy({ where: { id: req.params.id } }).then(function (dbProduct) {
=======
  // Delete an example by id
  app.delete("/api/products/:id", function(req, res) {
    db.Product.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbProduct) {
>>>>>>> origin
      res.json(dbProduct);
    });
  });

<<<<<<< HEAD

  // PUT route for updating items (userRegistry.handlebars)
  app.put("/api/products/:id", function (req, res) {
    console.log(req.body);
    db.Product.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbProduct) {
        res.json(dbProduct);
      });
  });
=======
//   app.post("/api/products/:id", function(req, res) {
//     //var condition = "id = " + req.params.id;
//     console.log(req,body);
//     dbProduct.update({
//       where: {
//       isPurchased: req.body.isPurchased
//       }
//   }).then(function(dbProduct) {
//     res.redirect('/userRegistry');
//   //res.json(dbProduct);
//   }
//   );
// });

>>>>>>> origin
};