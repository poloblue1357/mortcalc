const express = require("express")
const feeSetupRouter = express.Router()
const FeeSetup = require("../models/feesetup")

feeSetupRouter.get("/", (req, res, next) => {
    FeeSetup.find((err, feeSetup) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log(feeSetup)
        return res.status(200).send(feeSetup)
    })
})

feeSetupRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newFeeSetup = new FeeSetup(req.body)
    newFeeSetup.save(function(err, savedFeeSetup) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedFeeSetup)
    })
})

feeSetupRouter.delete("/:feeSetupId", (req, res, next) => {
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

feeSetupRouter.put(":feeSetupId", (req, res, next) => {
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

module.exports = feeSetupRouter