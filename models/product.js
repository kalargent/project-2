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
          type: DataTypes.DECIMAL, 
          allowNull: false, 
        },

        isPurchased: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false, 
        }
      });
      return Product;
    };