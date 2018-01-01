"use strict";
module.exports = (sequelize, DataTypes) => {
  var Track = sequelize.define("Track", {
    trackNumber: DataTypes.INTEGER,
    fileName: DataTypes.STRING,
    trackName: DataTypes.STRING
  });

  Track.associate = function(models) {
    models.Track.belongsTo(models.Album, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Track;
};
