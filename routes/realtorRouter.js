const express = require("express")
const realtorRouter = express.Router()
const Realtor = require("../models/realtor")

// Get All leads
realtorRouter.get("/", (req, res, next) => {
    Realtor.find((err, realtors) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(realtors)
    })
})

// Add new lead
realtorRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newRealtor = new Realtor(req.body)
    newRealtor.user = req.user._id
    newRealtor.save((err, savedRealtor) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedRealtor)
    })
})

// Delete Todo
realtorRouter.delete("/:realtorId", (req, res, next) => {
    Realtor.findOneAndDelete(
        {_id: req.params.realtorId, user: req.user._id},
        (err, deletedRealtor) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted  ${deletedRealtor.firstName} ${deletedRealtor.lastName} from the database!`)
        }
    )
})

//Update Todo
realtorRouter.put("/:realtorId", (req, res, next) => {
    Realtor.findOneAndUpdate(
        {_id: req.params.realtorId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedRealtor) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedRealtor)
        }
    )
})

module.exports = realtorRouter