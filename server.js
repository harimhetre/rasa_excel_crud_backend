const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const mongoose = require("mongoose");
const uploadExcelRoute = require('./routes/uploadExcel')
const getExcelData = require('./routes/getExcelData')
const getCategoryRoute = require('./routes/getCategory.route')
const updateExcelData = require('./routes/updateExcelData')

app.use(cors())
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/upload', uploadExcelRoute);
app.use('/getExcelData', getExcelData)
app.use('/updateExcel', updateExcelData);
app.use('/category', getCategoryRoute);


mongoose
  .connect(
    'mongodb://localhost:27017/excel-file-data', {useNewUrlParser: true}
  )
  .then(() => {
    app.listen(7000);
    console.log('Server is running on Port 7000');
  })
  .catch(err => {
    console.log(err);
  });