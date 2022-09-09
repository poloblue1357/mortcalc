const mongoose = require("mongoose")
const Schema = mongoose.Schema

const statusSchema = new Schema ({
    statusLeads: {
        type: String
    },
    statusRealtors: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Status", statusSchema)