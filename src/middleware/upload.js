const util = require("util");
const multer = require("multer");
const maxSize = 500 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(req.body.name + req.body.phone);
    var fileName = req.body.name + req.body.phone;
    if (fileName != null || fileName != "") {
      cb(null, req.body.name + req.body.phone + file.originalname);
    } else {
      cb(null, file.originalname);
    }
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
