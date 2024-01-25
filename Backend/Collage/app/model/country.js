const mongoose = require("mongoose")
const { Schema } = mongoose

const countrySchema = Schema({

  title: {
    type: String,
    required: true
  },
  image_URL: {
    type: String
  },
  sort_desc: {
    type: String,
  },
  detail: {
    type: String,
  }
},
  {
    timestamps: true
  })



module.exports = mongoose.model("Country", countrySchema)