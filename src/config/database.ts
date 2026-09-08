import mongoose from "mongoose";
import { env } from "./env.js"
const conectDatabase = async(): Promise<void> => {
  try {
    await mongoose.connect(env.mongoUri);

    console.log("MongoDB connected succesfully")

  } catch (error) {
    console.error("database is not connected", error)

    process.exit(1);
  }
}

export default conectDatabase;