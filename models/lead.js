const mongoose = require("mongoose")
const Schema = mongoose.Schema

const leadSchema = new Schema ({
    date: {
        type: String,
    },
    campaign: {
        type: String,
    },
    status: {
        type: String,
    },
    loanType: {
        type: String
    },
    loanPurpose: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    coBorrower: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    currentRate: {
        type: Number,
    },
    googleReview: {
        type: String,
    },
    lastContact: {
        type: String,
    },
    notes: {
        type: String,
    },
})

module.exports = mongoose.model("Lead", leadSchema)