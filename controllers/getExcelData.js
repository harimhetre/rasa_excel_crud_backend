const getExcelData = require('../service/getExcelData');

exports.GetData = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetData(req, res);
        console.log("response", response);
        // res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.GetAllData = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetAllData(req, res);
        console.log("response", response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};