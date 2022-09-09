const express = require("express")
const leadRouter = express.Router()
const Lead = require("../models/lead")

// Get All leads
leadRouter.get("/", (req, res, next) => {
    Lead.find((err, leads) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(leads)
    })
})

// Add new lead
leadRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newLead = new Lead(req.body)
    newLead.user = req.user._id
    newLead.save((err, savedLead) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedLead)
    })
})

// Delete Todo
leadRouter.delete("/:leadId", (req, res, next) => {
    Lead.findOneAndDelete(
        {_id: req.params.leadId, user: req.user._id},
        (err, deletedLead) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted  ${deletedLead.firstName} ${deletedLead.lastName} from the database!`)
        }
    )
})

//Update Todo
leadRouter.put("/:leadId", (req, res, next) => {
    Lead.findOneAndUpdate(
        {_id: req.params.leadId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedLead) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedLead)
        }
    )
})

module.exports = leadRouter