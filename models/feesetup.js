const mongoose = require("mongoose")
const Schema = mongoose.Schema

const feeSetupSchema = ({
        feeScenario: {
            type: String
        },
        origination: {
            type: Number
        },
        underwriting: {
            type: Number
        },
        taxService: {
            type: Number
        },
        creditReport: {
            type: Number
        },
        floodCertificate: {
            type: Number
        },
        appraisal: {
            type: Number
        },
        pestInspection: {
            type: Number
        },
    titleFees: {
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
        }
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true   
    }
})

module.exports = mongoose.model("FeeSetup", feeSetupSchema)