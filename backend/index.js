import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.routes.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/job.routes.js";
import applicationRouter from "./routes/application.routes.js";
import path from "path";

// connectDB();
dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
const _dirname = path.resolve();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://job-portal-ui-mern.vercel.app"
    ],
    credentials: true 
}
app.use(cors(corsOptions));

app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/job", jobRouter);
app.use("/application", applicationRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello world",
        success: true,
    })
});

// app.use(express.static(path.join(_dirname,"/frontend/dist")));
// app.get("*",(_,res)=>{
//    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀` + " " + `http://localhost:${PORT}`);
});