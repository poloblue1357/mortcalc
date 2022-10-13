const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loanInputSchema = new Schema ({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    loanPurpose: {
        type: Number
    },
    currentRate: {
        type: Number
    },
    currentEscrow: {
        type: Number
    },
    rentPayment: {
        type: Number
    },
    currentMI: {
        type: Number
    },
    term: {
        type: String
    },
    firstLoanBalance: {
        type: Number
    },
    loanType: {
        type: String
    },
    bestRate: {
        type: Number
    },
    betterRate: {
        type: Number
    },
    goodRate: {
        type: Number
    },
    creditDiscountBest: {
        type: Number
    },
    creditDiscountBetter: {
        type: Number
    },
    creditDiscountGood: {
        type: Number
    },
    additionalBest: {
        type: Number
    },
    additionalBetter: {
        type: Number
    },
    additionalGood: {
        type: Number
    },
    appraisedValue: {
        type: Number
    },
    purchasePrice: {
        type: Number
    },
    baseLoanAmount: {
        type: Number
    },
    loanTerm: {
        type: String
    },
    monthlyMIFactor: {
        type: Number
    },
    titleInsurance: {
        type: Number
    },
    monthlyTaxes: {
        type: Number
    },
    reservesTaxes: {
        type: Number
    },
    monthlyInsurance: {
        type: Number
    },
    reservesInsurance: {
        type: Number
    },
    daysRequired: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true   
    }
})

module.export = mongoose.model("LoanInput", loanInputSchema)