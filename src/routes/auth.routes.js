import { Router } from "express";
import { SignUp, SignIn, SignOut } from "../controllers/auth.controller.js";   
const AuthRouter = Router();

AuthRouter.post("/Sign-up", SignUp);

AuthRouter.post("/Sign-in", SignIn);

AuthRouter.post("/Sign-out", SignOut);

AuthRouter.post("/forgot-password", (req, res) => {res.send({ title: 'Forgot Password' });});

AuthRouter.post("/reset-password", (req, res) => {res.send({ title: 'Reset Password' });});

AuthRouter.get ("/user-info", (req, res) => {res.send({ title: 'User Info' });});

export default AuthRouter;
