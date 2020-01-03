const uploadExcelService = require('../service/uploadExcel');

exports.uploadFile = async (req, res, next) => {
    try {       
        let response = await uploadExcelService.uploadFile(req, res, next);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};
