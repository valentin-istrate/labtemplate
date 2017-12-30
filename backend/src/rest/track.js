var express = require("express");
var router = express.Router();
var track = require("../service/").track;

router.get("/findByAlbumId/:id", track.findByAlbumId);
router.get("/findById/:id", track.findById);
module.exports = router;
