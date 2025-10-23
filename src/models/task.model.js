import pool from '../config/database.js';

export class Task {
  constructor(id, task_name, description, task_priority, task_progress, status, createdAt, Due_date) {
    this.id = id;
    this.task_name = task_name;
    this.description = description;
    this.task_priority = task_priority;
    this.task_progress = task_progress;
    this.status = status;
    this.createdAt = createdAt;
    this.due_date = Due_date;
  }
}

export async function createTask(task_name, description, task_priority, task_progress, status, Due_date) {
  const [result] = await pool.query(
    'INSERT INTO task (task_name, description, task_priority, task_progress, status, Due_date) VALUES (?, ?, ?, ?, ?, ?)',
    [task_name, description, task_priority, task_progress, status, Due_date]
  );
  return new Task(result.insertId, task_name, description, task_priority, task_progress, status, new Date(), Due_date);
}

