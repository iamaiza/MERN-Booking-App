const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:5173"}))

const URL = process.env.MONGO_CONNECTION_URL
const port = process.env.PORT

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/test", (req, res) => {
    res.json({ message: "test" })
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})