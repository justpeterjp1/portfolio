import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

// =====  Security Middlewares  =====
app.use(helmet());
app.use(cors());
app.use(express.json());

// =====  Rate Limiter  =====
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    max: 10, // limit each IP to 100 requests per windowMs
});
app.use("/api/contact", limiter);

const PORT = process.env.port || 5000;

// =====  Base Route  =====
app.get("/", (req, res) => {
    res.send("API is running...");
});

// =====  Routes  =====
app.use("/api/contact", contactRoutes);

// =====  Start Server  =====
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
