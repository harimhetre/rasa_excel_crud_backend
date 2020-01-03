const getCategoryService = require('../service/getCategory.service');

exports.GetCategory = async (req, res, next) => {
    try {               
        let response = await getCategoryService.GetCategory();
        console.log("response", response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};