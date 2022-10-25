const express = require("express")
const feesetupRouter = express.Router()
const FeeSetup = require("../models/feesetup")

feesetupRouter.get("/", (req, res, next) => {
    FeeSetup.find((err, feeSetup) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        // console.log(feeSetup)
        return res.status(200).send(feeSetup)
    })
})

feesetupRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newFeeSetup = new FeeSetup(req.body)
    newFeeSetup.save(function(err, savedFeeSetup) {
        if(err) {
            res.status(500)
            return next(err)
        }
        // console.log(savedFeeSetup)
        return res.status(200).send(savedFeeSetup)
    })
})

feesetupRouter.delete("/:feeSetupId", (req, res, next) => {
    FeeSetup.findOneAndDelete(
        {_id: req.params.feeSetupId, user: req.user._id},
        (err, deletedFeeSetup) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(`Successfully deleted ${deletedFeeSetup}`)
        }
    )
})

feesetupRouter.put(":feeSetupId", (req, res, next) => {
    FeeSetup.findOneAndUpdate(
        {_id: req.params.feeSetupId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedFeeSetup) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedFeeSetup)
        }
    )
})

module.exports = feesetupRouter