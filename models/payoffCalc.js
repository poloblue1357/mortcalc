const mongoose = require("mongoose")
const Schema = mongoose.Schema

const payoffCalcSchema = new Schema ({
    howManyPayments: {
        type: Number
    },
    skipTwoPayments: {
        type: Boolean,
        default: false
    },
    typicalFees: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("PayoffCalc", payoffCalcSchema)