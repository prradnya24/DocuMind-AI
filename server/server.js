require("dotenv").config();

const express = require("express");
const cors = require("cors");
const protect = require("./middleware/authMiddleware");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("AI Knowledge Base API Running");
});
app.get("/api/profile", protect, (req, res) => {

    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});