const mongoose = require("mongoose")
const Schema = mongoose.Schema

const amortizationTablesSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("AmortizationTables", amortizationTablesSchema)