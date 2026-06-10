dotenv.config();
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Import and use your routes here
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
