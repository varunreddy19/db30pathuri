const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    vanType: String,
    vanPrice: Number,
    vanColor: String
})
module.exports = mongoose.model("Vans",
    vanSchema)