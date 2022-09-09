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
        type: String,
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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Realtor", realtorSchema)