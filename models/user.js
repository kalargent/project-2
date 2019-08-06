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
  return User;
};