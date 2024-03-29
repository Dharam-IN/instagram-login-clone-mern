import express from 'express';
import userrouter from './routes/userrouter.js'
import { ConnectionDB } from './db/db.js';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config({path: '.env'});

// CORS
app.use(cors())

// Middleware
app.use(express.json())

app.use("/api/v1", userrouter);

ConnectionDB()

export default app;