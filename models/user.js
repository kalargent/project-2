module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
    
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Product, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};