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

      // Product.associate = function(models) {
      //   // We're saying that a Post should belong to an Author
      //   // A Post can't be created without an Author due to the foreign key constraint
      //   Product.belongsTo(models.User, {
      //     foreignKey: {
      //       allowNull: false
      //     }
      //   });
      // };

      return Product;
    };