const Xlsx = require("xlsx");
const path = require("path");
var fs = require("fs");
var ExcelSchema = require("../models/uploadExcel");

module.exports = {
  uploadFile: async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
      }
      const excelFile = Xlsx.readFile(
        path.join(__dirname, `../excelFiles/${file.filename}`)
      );
      let allData = Xlsx.utils.sheet_to_json(excelFile.Sheets.Main, {
        raw: true
      });
      
      let data = []
      // for (let i = 0; i <= allData.length; i++) {
      //   let obj = {
      //     Description: allData[i].Description,
      //     Description_for_chatbot: allData[i]["Description for chatbot"],
      //     Category_1: allData[i]["Category 1"],
      //     Category_2: allData[i]["Category 2"],
      //     Expected_Action: allData[i]["Expected Action"],
      //     Mentioned_OR_explicit_ntities:
      //       allData[i]["Mentioned/explicit entities"],
      //     Ticket_for_Self_OR_Onbehalf: allData[i]["Ticket for Self/Onbehalf"]
      //   }
      //   data.push(obj);
      // }
      allData = JSON.parse(JSON.stringify(allData).replace(/\s(?=\w+":)/g, ""));
      
      try {
       return ExcelSchema.insertMany(allData, {ordered: false}).then(async result => {
          if (result) {
            return {
              status: 200,
              message: "Success"
            }
          }
        });
      } catch (error) {
        return {
          status: 500,
          message: "failed," + error
        };
      }

      try {
        fs.unlinkSync(path.join(__dirname, `../excelFiles/${file.filename}`));
      } catch (e) {
        return {
          message: "failed to delete" + e
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};
