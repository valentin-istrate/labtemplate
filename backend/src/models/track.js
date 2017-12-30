"use strict";
module.exports = (sequelize, DataTypes) => {
  var Track = sequelize.define("Track", {
    TrackNumber: DataTypes.INTEGER,
    FileName: DataTypes.STRING,
    TrackName: DataTypes.STRING
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
