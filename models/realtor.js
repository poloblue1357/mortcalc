const mongoose = require("mongoose")
const Schema = mongoose.Schema

const realtorSchema = new Schema ({
    date: {
        type: String,
    },
    campaign: {
        type: String,
    },
    status: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    brokerage: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    numberOfContacts: {
        type: String,
    },
    golfer: {
        type: String,
    },
    lastContact: {
        type: String,
    },
    notes: {
        type: String,
    }
})

module.exports = mongoose.model("Realtor", realtorSchema)