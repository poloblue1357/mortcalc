const express = require("express")
const statusRouter = express.Router()
const Status = require("../models/status")

// Get All leads
statusRouter.get("/", (req, res, next) => {
    Status.find((err, status1) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(status1)
    })
})

// Add new lead
statusRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newStatus = new Status(req.body)
    newStatus.user = req.user._id
    newStatus.save((err, savedStatus) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedStatus)
    })
})

// Delete Todo
statusRouter.delete("/:statusId", (req, res, next) => {
    Status.findOneAndDelete(
        {_id: req.params.statusId, user: req.user._id},
        (err, deletedStatus) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted status from the database!`)
        }
    )
})

//Update Todo
statusRouter.put("/:statusId", (req, res, next) => {
    Status.findOneAndUpdate(
        {_id: req.params.statusId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedStatus) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedStatus)
        }
    )
})

module.exports = statusRouter