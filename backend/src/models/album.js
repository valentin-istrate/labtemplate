"use strict";
module.exports = (sequelize, DataTypes) => {
  var Album = sequelize.define("Album", {
    AlbumName: DataTypes.STRING,
    BandName: DataTypes.STRING,
    CoverFileName: DataTypes.STRING
  });

  Album.associate = function(models) {
    models.Album.hasMany(models.Track);
  };

  return Album;
};
