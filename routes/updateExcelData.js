"use strict";
const express = require("express"),
  router = new express.Router();
const updateExcelData = require("../controllers/updateExcelData");

router.route("/updateData").post(updateExcelData.UpdateExcelData)

module.exports = router;