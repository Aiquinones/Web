'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    name: DataTypes.STRING,
    entance_fee: DataTypes.INTEGER,
    end_time: DataTypes.DATE,
    start_time: DataTypes.DATE,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    privacy: DataTypes.INTEGER
  }, {});
  //event.associate = function(models) {
  //  event.hasMany(models.user)
  //  event.hasOne(models.place)
  //  event.hasMany(models.comment)// associations can be defined here
  //};
  return event;
};
