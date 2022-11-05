const express = require("express")
const titleFeesRouter = express.Router()
const TitleFees = require("../models/titlefees")

titleFeesRouter.get("/", (req, res, next) => {
    TitleFees.find((err, titleFees) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(titleFees)
    })
})

titleFeesRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newTitleFees = new TitleFees(req.body)
    newTitleFees.save(function(err, savedTitleFees) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedTitleFees)
    })
})

titleFeesRouter.delete("/:titleFeesId", (req, res, next) => {
    TitleFees.findOneAndDelete(
        {_id: req.params.titleFeesId, user: req.user._id},
        (err, deletedTitleFees) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(`Successfully deleted ${deletedTitleFees}`)
        }
    )
})

titleFeesRouter.put("/:titleFeesId", (req, res, next) => {
    TitleFees.findOneAndUpdate(
        {_id: req.params.titleFeesId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedTitleFees) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedTitleFees)
        }
    )
})

module.exports = titleFeesRouter