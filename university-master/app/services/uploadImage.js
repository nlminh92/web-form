var multer = require('multer');
const path = require('path');
const randomstring = require("randomstring");
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    let fileExtension = path.extname(file.originalname).split('.').pop();
    let rand_string = randomstring.generate(7);
    callback(null, file.fieldname + '-' + rand_string + Date.now() + '.' + fileExtension);
  }
});

var upload = multer({ storage : storage }).array('frames', 10);

module.exports = upload;
