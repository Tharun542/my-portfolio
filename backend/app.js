import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
import contact from './Routes/contact.js';
app.use('/api', contact)

export default app;