const express = require("express")
const loanInputRouter = express.Router()
const LoanInput = require("../models/loanInput")

// Get All leads
loanInputRouter.get("/", (req, res, next) => {
    LoanInput.find((err, loanInputs) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(loanInputs)
    })
})

// Add new lead
loanInputRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newLoanInput = new LoanInput(req.body)
    // newLead.user = req.user._id
    newLoanInput.save(function(err, savedLoanInput) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLoanInput)
    })
})

// Delete Todo
loanInputRouter.delete("/:loanInputId", (req, res, next) => {
    LoanInput.findOneAndDelete(
        {_id: req.params.loanInputId, user: req.user._id},
        (err, deletedLoanInput) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(`Successfully deleted ${deletedLoanInput}`)
        }
    )
})
/
//Update Todo
loanInputRouter.put("/:loanInputId", (req, res, next) => {
    LoanInput.findOneAndUpdate(
        {_id: req.params.loanInputId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedLoanInput) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedLoanInput)
        }
    )
})

module.exports = loanInputRouter