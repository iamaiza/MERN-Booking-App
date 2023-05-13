require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/userRoutes.js")
const placeRoutes = require("./routes/placeRoutes.js") 

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: process.env.ORIGIN}))
app.use(userRoutes, placeRoutes)
app.use('/uploads', express.static(__dirname+'/uploads'))

const URL = process.env.MONGO_CONNECTION_URL
const port = process.env.PORT

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/test", (req, res) => {
    res.json({ message: "test" })
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})