import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Import Routes
import ActivityRoutes from "./routes/ActivityRoute.js";
import TodoRoutes from "./routes/TodoRoute.js";

// Route Middlewares
app.use(ActivityRoutes);
app.use(TodoRoutes);


app.listen(3030, () => {
    console.log('Server is running on port 3030');
})