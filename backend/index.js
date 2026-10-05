import app from "./app.js"
import dotenv from 'dotenv';
dotenv.config({
    path: "./backend/.env"
});
const PORT = process.env.PORT || 8082;
const mongoDB_URL = process.env.MONGODB_URL;
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
mongoose.connect(mongoDB_URL)
.then(()=>{
    console.log("mongooDB connected successfully");

    app.listen(PORT, ()=>{
    console.log("the server running on the port", PORT)
})
})
.catch((err)=>{
    console.log("mongoDB connection failed", err.message)
});

