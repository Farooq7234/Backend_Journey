import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// 🚀 Setting up middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// 📦 Configuring data handling like json, url 
app.use(express.json({ limit: "16kb" })); // Limiting JSON payload size to 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Limiting URL-encoded payload size to 16kb

// 🗂️ Serving static files from the 'public' folder
app.use(express.static("public"));

// 🍪 Enabling cookie parsing
app.use(cookieParser());

export { app };
