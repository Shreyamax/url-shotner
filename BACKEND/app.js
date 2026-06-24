import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URI);
import connectDB from "./SRC/config/mongo.config.js"
import short_url from "./SRC/Routes/shortUrl.routes.js"
import { redirectFromShortUrl } from "./SRC/Controller/shortUrl.controller.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/create",short_url)
app.get("/:id" , redirectFromShortUrl)

app.listen(3000,()=>{
    connectDB()
    console.log("Sever is running on http://localhost:3000");
})