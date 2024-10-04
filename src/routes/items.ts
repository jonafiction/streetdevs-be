import express from 'express';
import { pool } from '../config/db.js';
import { ResultSetHeader } from 'mysql2';

const router = express.Router();
// Endpoint para hacer un GET de todo el contenido en la tabla "items"
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
});
// Endpoint para crear un nuevo item
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO items (name, description) VALUES (?, ?)',
      [name, description]
    );
    res.status(201).json({ id: result.insertId, name, description });
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
});
// Endpoint para hacer un UPDATE
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await pool.query(
      'UPDATE items SET name = ?, description = ? WHERE id = ?',
      [name, description, id]
    );
    res.json({ id, name, description });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
});
// Endpoint para el DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM items WHERE id = ?', [id]);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
});

export default router;