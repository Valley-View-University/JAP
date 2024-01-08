import express from "express";
import cors from "cors"
import userRoutes from './src/routes/user.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// app.use("/api/users", userRoutes);
app.use("/api", userRoutes);

app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
})