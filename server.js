require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const expressJwt = require("express-jwt")
const path = require("path")

const port = process.env.PORT || 7000;

const secret = process.env.SECRET || "bottle filter ghost tray"

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// mongoose.connect("mongodb://localhost:27017/mortcalcdb",
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    // },
//     () => console.log("Connected to the DB.")    
// )
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,  
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
});

app.use("/auth", require("./routes/auth.js"))
app.use("/api", expressJwt({ secret: secret, algorithms: ["HS256"]}))
app.use("/api/leads", require("./routes/leadRouter.js"))
app.use("/api/realtors", require("./routes/realtorRouter.js"))
app.use("/api/status", require("./routes/statusRouter.js"))
app.use("/api/campaigns", require("./routes/campaignRouter.js"))
app.use("/api/lps", require("./routes/lpsRouter.js"))
app.use("/api/feesetup", require("./routes/feesetupRouter.js"))
app.use("/api/titlefees", require("./routes/titlefeesRouter.js"))
app.use("/api/loaninput", require("./routes/loanInputRouter.js"))
app.use("/api/payoffcalc", require("./routes/payoffcalcRouter.js"))
app.use("/api/quickdti", require("./routes/quickDTIRouter.js"))
app.use("/api/amortables", require("./routes/amortTablesRouter.js"))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("The server is running on Port 7000.")
})