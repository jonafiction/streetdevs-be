import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/items.js';

const app = express();
// Capa Middleware
app.use(cors());
app.use(express.json());

app.use('/api/items', itemRoutes);

export default app;