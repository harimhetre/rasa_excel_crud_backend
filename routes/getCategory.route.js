"use strict";
const express = require("express"),
  router = new express.Router();
const getCategoryController = require("../controllers/getCategory.controller");

router.route("/getCategory").get(getCategoryController.GetCategory)

module.exports = router;