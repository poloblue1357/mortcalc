const express = require("express")
const campaignRouter = express.Router()
const Campaign = require("../models/campaign")

// Get All leads
campaignRouter.get("/", (req, res, next) => {
    Campaign.find((err, campaigns) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(campaigns)
    })
})

// Add new lead
campaignRouter.post("/", (req, res, next) => {
    // console.log("User", req.user)
    // console.log("body", req.body)
    req.body.user = req.user._id
    const newCampaign = new Campaign(req.body)
    newCampaign.user = req.user._id
    newCampaign.save((err, savedCampaign) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCampaign)
    })
})

// Delete Todo
campaignRouter.delete("/:campaignId", (req, res, next) => {
    Campaign.findOneAndDelete(
        {_id: req.params.campaignId, user: req.user._id},
        (err, deletedCampaign) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedCampaign} from the database!`)
        }
    )
})

//Update Todo
campaignRouter.put("/:campaignId", (req, res, next) => {
    Campaign.findOneAndUpdate(
        {_id: req.params.campaignId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedCampaign) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCampaign)
        }
    )
})

module.exports = campaignRouter