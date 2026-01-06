import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";

// Routes
import serverStatusRoutes from "./routes/serverStatusRoutes.js"
import personRoutes from "./routes/personRoutes.js"
import treeRoutes from "./routes/treeRoutes.js";

config();
await connectDB();

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/serverstatus", serverStatusRoutes);
app.use("/api/person", personRoutes);
app.use("/api/tree", treeRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is up and running");
})