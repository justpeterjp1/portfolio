import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

app.set("trust proxy", 1);

// ✅ Always first: JSON + CORS
app.use(express.json());
app.use(
  cors({
    origin: "https://jp-portfolio-iota.vercel.app",
    methods: ["GET", "POST"],
  })
);

// Security middlewares
app.use(helmet());

// Rate limiter (apply globally)
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 10,
});
app.use(limiter);

// Routes
app.get("/", (req, res) => res.send("API is running..."));
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
