const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excelFileSchema = new Schema({
  Description: {
    type: String,
    default: null,
    unique: true
  },
  // Descriptionforchatbot: {
  //   type: String,
  //   default: null
  // },
  Category1: {
    type: String,
    default: null
  },
  Category2: {
    type: String,
    default: null
  },
  Category3: {
    type: String,
    default: null
  },
  IncidentORRequest: {
    type: String,
    default: null
  },
  // ExpectedAction: {
  //   type: String,
  //   default: null
  // },
  // Mentionedexplicitentities: {
  //   type: String,
  //   default: null
  // },
  // NotMentionedImplicitentities: {
  //   type: String,
  //   default: null
  // },
  // TicketforSelfOnbehalf: {
  //   type: String,
  //   default: null
  // },
  Confidence1: {
    type: Number,
    default: null
  },
  Confidence2: {
    type: Number,
    default: null
  },
  Confidence3: {
    type: Number,
    default: null
  },
  Confidence4: {
    type: Number,
    default: null
  },
});
excelFileSchema.index({ Description: 1, unique: true})
module.exports = mongoose.model("excel_data", excelFileSchema);
