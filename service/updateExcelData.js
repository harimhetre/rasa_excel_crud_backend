const updateExcelModel = require("../models/uploadExcel");
const mongoose = require("mongoose");

module.exports = {
  UpdateExcelData: async body => {
    try {
      return updateExcelModel
        .findOneAndUpdate(
          { _id: mongoose.Types.ObjectId(body._id) },
          {
            $set: {
              Category1: body.Category1,
              Category2: body.Category2,
              Category3: body.Category3,
              IncidentORRequest: body.IncidentORRequest,
              Confidence1: body.Confidence1,
              Confidence2: body.Confidence2,
              Confidence3: body.Confidence3,
              Confidence4: body.Confidence4
            }
          }
        )
        .exec()
        .then(async result => {
          if (result) {
            return {
              data: result,
              status: 200,
              message: "Record updated Successfully"
            };
          }
        });
    } catch (error) {
      return {
        status: 500,
        message: "failed," + error
      };
    }
  }
};
