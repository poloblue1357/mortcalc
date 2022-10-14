const mongoose = require("mongoose")
const Schema = mongoose.Schema

const quickDTISchema = new Schema ({
    inputOne: {
        type: Number
    },
    inputTwo: {
        type: Number
    },
    inputThree: {
        type: Number
    },
    inputFour: {
        type: Number
    },
    inputFive: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("QuickDTI", quickDTISchema)