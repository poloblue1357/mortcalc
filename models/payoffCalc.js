const mongoose = require("mongoose")
const Schema = mongoose.Schema

const payoffCalcSchema = new Schema ({
    howManyPayment: {
        type: Number
    },
    skipTwoPayments: {
        type: Boolean
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("PayoffCalc", payoffCalcSchema)