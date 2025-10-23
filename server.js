import app from './src/app.js';
import { PORT } from './src/config/env.js';
import pool from './src/config/db.js';

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  pool.getConnection().then(connection => {
    connection.release();
    console.log('Database connected successfully.');
  }).catch(err => {
    console.error('Database connection failed:', err);
  });
});