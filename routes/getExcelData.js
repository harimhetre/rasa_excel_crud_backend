"use strict";
const express = require("express"),
  router = new express.Router();
const getExcelData = require("../controllers/getExcelData");

router.route("/getData").post(getExcelData.GetData);
router.route("/getAllData").get(getExcelData.GetAllData)

module.exports = router;