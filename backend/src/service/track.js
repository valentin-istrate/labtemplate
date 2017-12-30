"use strict";

const track = require("../models").Track;

exports.findByAlbumId = function(req, res) {
  let id = req.params.id;
  track
    .findAll({
      where: {
        AlbumId: id
      }
    })
    .then(tracks => {
      res.jsonp(tracks);
    })
    .catch(error => res.status(400).send(error));
};

exports.findById = function(req, res) {
  let id = req.params.id;
  track
    .findById(id)
    .then(track => {
      res.jsonp(track);
    })
    .catch(error => res.status(400).send(error));
};
