"use strict";
module.exports = (sequelize, DataTypes) => {
  var Album = sequelize.define("Album", {
    albumName: DataTypes.STRING,
    bandName: DataTypes.STRING,
    coverFileName: DataTypes.STRING
  });

  Album.associate = function(models) {
    models.Album.hasMany(models.Track);
  };

  return Album;
};
