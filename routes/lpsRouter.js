const express = require("express")
const lpsRouter = express.Router()
const LPS = require("../models/lps")

lpsRouter.get("/", (req, res, next) => {
    LPS.find((err, lps) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(lps)
    })
})

lpsRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newLPS = new LPS(req.body)
    newLPS.save(function(err, savedLPS) {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedLPS)
    })
})

lpsRouter.delete("/:lpsId", (req, res, next) => {
    LPS.findOneAndDelete(
        {_id: req.params.lpsId, user: req.user._id},
        (err, deletedLPS) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.send(`Successfully deleted ${deletedLPS}`)
        }
    )
})

lpsRouter.put(":lpsId", (req, res, next) => {
    LPS.findOneAndUpdate(
        {_id: req.params.lpsId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedLPS) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedLPS)
        }
    )
})

module.exports = lpsRouter