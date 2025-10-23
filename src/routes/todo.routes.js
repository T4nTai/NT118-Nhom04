import { Router } from "express";
const TodoRouter = Router();

TodoRouter.get ("/", (req, res) => {res.send({ title: 'Get All Todos' });});

TodoRouter.post("/", (req, res) => {res.send({ title: 'Create Todo' });});

TodoRouter.put ("/:id", (req, res) => {res.send({ title: 'Update Todo' });});

TodoRouter.delete("/:id", (req, res) => {res.send({ title: 'Delete Todo' });});

TodoRouter.get ("/:id", (req, res) => {res.send({ title: 'Get Todo by ID' });});

export default TodoRouter;
