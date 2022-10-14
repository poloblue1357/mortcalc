const express = require("express")
const quickDTIRouter = express.Router()
const QuickDTI = require("../models/quickDTI")

// Get All leads
quickDTIRouter.get("/", (req, res, next) => {
    QuickDTI.find((err, quickDTIs) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(quickDTIs)
    })
})

// Add new lead
quickDTIRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newQuickDTI = new QuickDTI(req.body)
    // newRealtor.user = req.user._id
    newQuickDTI.save(function(err, savedQuickDTI) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedQuickDTI)
    })
})

// Delete Todo
quickDTIRouter.delete("/:quickDTIId", (req, res, next) => {
    QuickDTI.findOneAndDelete(
        {_id: req.params.quickDTIId, user: req.user._id},
        (err, deletedQuickDTI) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedQuickDTI}.`)
        }
    )
})

//Update Todo
quickDTIRouter.put("/:quickDTIId", (req, res, next) => {
    QuickDTI.findOneAndUpdate(
        {_id: req.params.quickDTIId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedQuickDTI) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedQuickDTI)
        }
    )
})

module.exports = quickDTIRouter