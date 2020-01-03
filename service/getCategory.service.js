const getCategory1Model = require("../models/getCategory1.model");

module.exports = {
    GetCategory: async  => {
    try {
      // console.log("getCAtemodel", getCategory1Model);
      
      return getCategory1Model.find().then(async result => {
        // console.log("result", result);
        
        if (result) {
          return {
            data: result,
            status: 200,
            message: "success"
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