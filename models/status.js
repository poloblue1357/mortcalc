const mongoose = require("mongoose")
const Schema = mongoose.Schema

const statusSchema = new Schema ({
    statusLeads: {
        type: String
    },
    statusRealtors: {
        type: String
    },
})

module.exports = mongoose.model("Status", statusSchema)