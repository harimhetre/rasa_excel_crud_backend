const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const category1Schema = new Schema({
    category1: [String],
    category2: [String],
});
// excelFileSchema.index({ Description: 1, unique: true})
module.exports = mongoose.model("category_1", category1Schema);