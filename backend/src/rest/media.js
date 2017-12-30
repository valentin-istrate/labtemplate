var express = require("express");
var router = express.Router();
var media = require("../service/").media;

router.get("/icon/:fileName", media.getIcon);
router.get("/track/:trackName", media.getTrack);
module.exports = router;
