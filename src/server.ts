import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from "./app.js";
import { databaseConnect } from "./config/database.js";
import {env} from "./config/env.js"

const connect = async(): Promise<void> => {
  await databaseConnect()

  console.log("Database connection successfull")

  app.listen(env.port, () => {
    console.log(`app is running on port: ${env.port}`)
  })
}

connect();