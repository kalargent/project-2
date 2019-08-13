module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
      productName: {
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      
      store: {
        type: DataTypes.STRING, 
        allowNull: false, 
      },
      
      price: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
      },

      isPurchased: {
          type: DataTypes.BOOLEAN, 
          defaultValue: false, 
      }, 

      // userId: {
      //   type: DataTypes.INTEGER, 
      //   defaultValue: 0, 
      // }

    });


      Product.associate = function(models) {
        Product.belongsTo(models.User, {
          // foreignKey: {
          //   allowNull: false
          // }
        });
      };


    return Product;
  };