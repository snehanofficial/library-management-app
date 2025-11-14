import express from 'express';
import cors from 'cors';
import './Config/db.js'
import bookRoutes from './Routes/bookRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend is running in http://localhost:${PORT}`);
})