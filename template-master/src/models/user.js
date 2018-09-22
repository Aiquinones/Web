'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    university: DataTypes.STRING,
    picture_link: DataTypes.STRING,
    password: DataTypes.STRING,
    super_admin: DataTypes.INTEGER,
    verified: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};