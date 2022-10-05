const mongoose = require("mongoose")
const Schema = mongoose.Schema

const titleFeesSchema = ({
    closingFee: {
        type: Number
    },
    cpl: {
        type: Number
    },
    cplBorrower: {
        type: Number
    },
    endorsements: {
        type: Number
    },
    recordingServices: {
        type: Number
    },
    recording: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true   
    }
})

module.exports = mongoose.model("TitleFees", titleFeesSchema)