const Sequelize = require('sequelize');

/****************************
 * User Model Initialization 
*****************************/
module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    lastName: {
      type: Sequelize.STRING, 
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, { sequelize });
  User.associate = (models) => {
    User.hasMany(models.Course, { foreignKey: 'userId' });
  }
  return User;
};