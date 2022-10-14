const express = require("express")
const payoffCalculatorRouter = express.Router()
const PayoffCalculator = require("../models/payoffCalculator")

// Get All leads
payoffCalculatorRouter.get("/", (req, res, next) => {
    PayoffCalculator.find((err, payoffCalculators) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(payoffCalculators)
    })
})

// Add new lead
payoffCalculatorRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newPayoffCalculator = new PayoffCalculator(req.body)
    // newRealtor.user = req.user._id
    newPayoffCalculator.save(function(err, savedPayoffCalculator) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPayoffCalculator)
    })
})

// Delete Todo
payoffCalculatorRouter.delete("/:payoffCalculatorId", (req, res, next) => {
    PayoffCalculator.findOneAndDelete(
        {_id: req.params.payoffCalculatorId, user: req.user._id},
        (err, deletedPayoffCalculator) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedPayoffCalculator}.`)
        }
    )
})

//Update Todo
payoffCalculatorRouter.put("/:payoffCalculatorId", (req, res, next) => {
    PayoffCalculator.findOneAndUpdate(
        {_id: req.params.payoffCalculatorId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedPayoffCalculator) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPayoffCalculator)
        }
    )
})

module.exports = payoffCalculatorRouter