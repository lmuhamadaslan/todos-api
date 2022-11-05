import express from 'express';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
import ActivityRoutes from "./routes/ActivityRoute.js";
import TodoRoutes from "./routes/TodoRoute.js";

// Route Middlewares
app.use(ActivityRoutes);
app.use(TodoRoutes);


app.listen(3030, () => {
    console.log('Server is running on port 3030');
})