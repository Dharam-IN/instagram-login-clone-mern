import express from 'express';
import dotenv from 'dotenv';
import { ConnectionDB } from './db/db.js';

dotenv.config({path: '.env'})

const app = express();

const port = 5000;

app.get("/", function(req, res){
    res.send("india");
})

ConnectionDB()

app.listen(port, function(req, res){
    console.log(`Server Running On ${port}`)
})
