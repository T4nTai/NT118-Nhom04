import { Router } from "express";

const TaskRouter = Router();

TaskRouter.get ("/", (req, res) => {res.send({ title: 'Get All Tasks' });});

TaskRouter.post("/", (req, res) => {res.send({ title: 'Create Task' });});

TaskRouter.put ("/:id", (req, res) => {res.send({ title: 'Update Task' });});
TaskRouter.delete("/:id", (req, res) => {res.send({ title: 'Delete Task' });});

TaskRouter.get ("/:id", (req, res) => {res.send({ title: 'Get Task by ID' });});

export default TaskRouter;