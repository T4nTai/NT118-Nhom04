import { createUser, getUserByUsername, User } from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET,JWT_EXPIRES_IN } from "../config/env.js";


export async function SignUp(req, res, next) {
  const { username, email, password } = req.body;
    try {
        const existingUser = await getUserByUsername(username); 
        const existingEmail = await getUserByUsername(email); 
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const newUser = await createUser(username, email, password);
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        res.status(201).json({ id: newUser.id, username: newUser.username, email: newUser.email, token });
        console.log('User registered:', newUser);
    } catch (error) {
        next(error);
    }
}

export async function SignIn(req, res, next) {
  const { username, password } = req.body;
  try {
      const user = await getUserByUsername(username);
      if(!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        console.log(user);
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
            return res.status(401).json({ message: 'Invalid password' });
      }
      res.status(200).json({ message: 'Sign-in successful' });
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  } catch (error) {
      next(error);
  }
}

export async function SignOut(req, res, next) {
  try {
      res.status(200).json({ message: 'Sign-out successful' });
  } catch (error) {
      next(error);
  }
}