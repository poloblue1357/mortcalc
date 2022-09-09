const mongoose = require("mongoose")
const Schema = mongoose.Schema

const campaignSchema = new Schema ({
    campaignsLeads: {
        type: String
    },
    campaignsRealtors: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Campaign", campaignSchema)