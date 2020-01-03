const updateExcelDataData = require('../service/updateExcelData');

exports.UpdateExcelData = async (req, res, next) => {
    try {       
        let response = await updateExcelDataData.UpdateExcelData(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};