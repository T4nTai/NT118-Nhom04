import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

export class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
export async function createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO user (Username, Email, Password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    return new User(result.insertId, username, email, hashedPassword);
  }
export async function getUserByUsername(username) {
    const [rows] = await pool.query(
      'SELECT * FROM user WHERE Username = ?',
      [username]
    );
    if (rows.length === 0) {
      return null;
    }   
    const { ID, Username, Email, Password } = rows[0];
    return new User(ID, Username, Email, Password);
  }
export async function getUserByEmail(email) {
    const [rows] = await pool.query(
      'SELECT * FROM user WHERE Email = ?',
      [email]
    );
    if (rows.length === 0) {
      return null;
    }
    const { ID, Username, Email, Password } = rows[0];
    return new User(ID, Username, Email, Password);
  }