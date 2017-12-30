"use strict";

const album = require("../models").Album;

exports.list = function(req, res) {
  album
    .findAll()
    .then(albums => {
      res.jsonp(albums);
    })
    .catch(error => res.status(400).send(error));
};

exports.findById = function(req, res) {
  let id = req.params.id;
  album.findById(id).then(album => {
    res.jsonp(album);
  });
};
