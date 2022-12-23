const mongoose = require("mongoose")
const Schema = mongoose.Schema

const payoffCalcSchema = new Schema ({
    howManyPayments: {
        type: Number
    },
    checked: {
        type: Boolean
    },
    typicalFees: {
        type: Number
    },
    estimatedPayoff: {
        type: Number
    },
    accruedInterest: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("PayoffCalc", payoffCalcSchema)