'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    content: DataTypes.STRING,
    time: DataTypes.DATE,
    on_response_to: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    comment.belongsTo(models.user)
    comment.belongsTo(models.event)// associations can be defined here
  };
  return comment;
};
