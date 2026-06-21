import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";


// app config
const app = express();
const port = process.env.PORT || 4000
dotenv.config();
connectDB()
connectCloudinary()


// middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.use(`/api/user`,userRouter)
app.use("/api/product", productRouter);


app.get("/", (req, res) => {
  res.send("Miraya API Working");
});

app.listen(port, () => 
  console.log("Server running on PORT :" + port ))