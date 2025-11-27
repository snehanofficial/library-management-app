import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './Config/db.js'
import bookRoutes from './Routes/bookRoutes.js'
import userRoutes from './Routes/userRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend is running in http://localhost:${PORT}`);
})