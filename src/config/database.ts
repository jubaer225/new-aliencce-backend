import mongoose from "mongoose";
import {env} from "./env.js"

export const databaseConnect = async(): Promise<void> => {
  try {
    await mongoose.connect(env.mongoUri)
  } catch (error) {
    console.error("Unable to connect to database", error);

    process.exit(1);
  }
}