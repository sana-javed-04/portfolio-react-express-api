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

const fs = require('fs');
const path = require('path');

// Portfolio data (projects, blogs, testimonials) bhejne ke liye route
app.get('/api/portfolio-data', (req, res) => {
    try {
        // db.json file ka sahi path dhundna (yeh main root folder me honi chahiye)
        const dataPath = path.join(__dirname, '../db.json');

        // File ko read karna
        const rawData = fs.readFileSync(dataPath, 'utf8');

        // Data ko JSON format me frontend ko bhej dena
        res.json(JSON.parse(rawData));
    } catch (error) {
        console.error("Error reading db.json file:", error);
        res.status(500).json({ error: "Internal Server Error: Data loading failed" });
    }
});


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});

