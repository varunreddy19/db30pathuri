const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    vanType: String,
    vanPrice: { type: Number, min: 100, max: 10000 },
    vanColor: { type: String, minLength :3}
})
module.exports = mongoose.model("Vans",
    vanSchema)