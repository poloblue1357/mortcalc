const mongoose = require("mongoose")
const Schema = mongoose.Schema

const lpsSchema = new Schema ({
    loanAmount: {
        type: Number
    },
    refinance: {
        type: Number
    },
    purchases: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true   
    }
})

module.exports = mongoose.model("LPS", lpsSchema)