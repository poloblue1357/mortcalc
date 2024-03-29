const express = require("express")
const amortTablesRouter = express.Router()
const AmortizationTables = require("../models/amortizationTables")

// Get All leads
amortTablesRouter.get("/", (req, res, next) => {
    AmortizationTables.find((err, amortizationTables) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(amortizationTables)
    })
})

// Add new lead
amortTablesRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newAmortizationTables = new AmortizationTables(req.body)
    // newRealtor.user = req.user._id
    newAmortizationTables.save(function(err, savedAmortizationTables) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAmortizationTables)
    })
})

// Delete Todo
amortTablesRouter.delete("/:amortizationTablesId", (req, res, next) => {
    AmortizationTables.findOneAndDelete(
        {_id: req.params.amortizationTablesId, user: req.user._id},
        (err, deletedAmortizationTables) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedAmortizationTables}.`)
        }
    )
})

//Update Todo
amortTablesRouter.put("/:amortizationTablesId", (req, res, next) => {
    AmortizationTables.findOneAndUpdate(
        {_id: req.params.amortizationTablesId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedAmortizationTables) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedAmortizationTables)
        }
    )
})

module.exports = amortTablesRouter