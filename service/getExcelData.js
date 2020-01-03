const getDataModel = require("../models/uploadExcel");

module.exports = {
GetData: async (req, res) => {
  let response;
  var pageNo = req.body.pageNo;
  var size = req.body.size
  var query = {}
  if(pageNo < 0 || pageNo === 0){
    response =  {
      "error": true,
      "message": "Invalid Page number",
    }
  }
  query.skip = size*(pageNo - 1);
  query.limit = size
  
    try {
       getDataModel.find({}, {}, query).then(async result => {
        if (result) {
          return {
            data: result,
            status: 200,
            message: "success"
          };
        }
      });
      getDataModel.count({},function(err,totalCount) {
        if(err) {
           response = {"error" : true,"message" : "Error fetching data"}
        }else {
          return getDataModel.find({},{},query,function(err,data) {
             if(err) {
                 response = {"error" : true,"message" : "Error fetching data"};
             } else {
                 var totalPages = Math.ceil(totalCount / size)
                  response = {error : false, "pages":totalPages, data : data,};
             }
             res.send(response)
          });
        }
   
  })
    } catch (error) {
      return {
        status: 500,
        message: "failed," + error
      };
    }
  },
  GetAllData: async  => {
    try {
      return getDataModel.find().then(async result => {
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