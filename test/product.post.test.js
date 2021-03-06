var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("POST /api/productss", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save a product", function(done) {
    // Create an object to send to the endpoint
    var Product = {
      productName: "Pillow", 
      store: "Target", 
      price: "3.00", 
    }

    // var reqBody = {
    //   text: "Example text",
    //   description: "Example description"
    // };

    // POST the request body to the server
    request
      .post("/api/products")
      .send(Product)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(Product);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});
