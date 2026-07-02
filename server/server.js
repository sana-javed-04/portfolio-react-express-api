const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoute = require("./routes/contact");


const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Portfolio Backend Running...");

});
app.use("/api/contact", contactRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});