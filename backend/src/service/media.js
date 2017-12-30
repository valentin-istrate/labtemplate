const mediaserver = require("mediaserver");
const fs = require("fs");

exports.getIcon = function(req, res) {
  let iconName = req.params.fileName;
  let img = fs.readFileSync("media/cover/" + iconName);
  res.writeHead(200, { "Content-Type": "image/png" });
  res.end(img, "binary");
};

exports.getTrack = function(req, res) {
  let trackName = req.params.trackName;
  mediaserver.pipe(req, res, "media/track/" + trackName);
};
