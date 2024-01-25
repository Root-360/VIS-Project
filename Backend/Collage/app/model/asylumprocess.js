const mongoose = require("mongoose")
const { Schema } = mongoose

const AsylumprocessParySchema = Schema({

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



module.exports = mongoose.model("Asylumprocess", AsylumprocessParySchema)