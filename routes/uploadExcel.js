"use strict";
const express = require("express"),
  router = new express.Router();
const multer = require("multer");
const path = require("path");
const uploadExcelController = require("../controllers/uploadExcel");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "../excelFiles"));
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    //file filter
    if (
      ["xls", "xlsx"].indexOf(
        file.originalname.split(".")[file.originalname.split(".").length - 1]
      ) === -1
    ) {
      return callback(new Error("Wrong extension type"));
    }
    callback(null, true);
  }
});

router
  .route("/uploadEmailExcelFile")
  .post(upload.single("myFile"), uploadExcelController.uploadFile);

module.exports = router;
