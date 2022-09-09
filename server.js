require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const expressJwt = require("express-jwt")

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/mortcalcdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB.")    
)
app.use("/auth", require("./routes/auth.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/leads", require("./routes/leadRouter.js"))
app.use("/api/realtors", require("./routes/realtorRouter.js"))
app.use("/api/status", require("./routes/statusRouter.js"))
app.use("/api/campaigns", require("./routes/campaignRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000.")
})