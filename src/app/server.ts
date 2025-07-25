import dotenv from "dotenv";
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

let server: Server;

const PORT = 5000;
const uri = process.env.MONGODB_URI;

async function main() {
  try {
    await mongoose.connect(uri!);

    console.log("Connected to MongoDB using Mongoose!!");

    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
