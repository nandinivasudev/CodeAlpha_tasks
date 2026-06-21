import express from "express";
import {
registerUser,
loginUser,
adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// User Authentication
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Admin Authentication
userRouter.post("/admin", adminLogin);

export default userRouter;
