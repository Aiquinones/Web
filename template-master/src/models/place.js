'use strict';
module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define('place', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  place.associate = function(models) {
    place.hasMany(models.event)
    // associations can be defined here
  };
  return place;
};
