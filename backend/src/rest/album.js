var express = require("express");
var router = express.Router();
var album = require("../service/").album;

router.get("/list", album.list);
router.get("/findById/:id", album.findById);
module.exports = router;
