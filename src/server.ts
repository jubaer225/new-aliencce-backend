import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import app from "./app.js";
import { env } from "./config/env.js";
import conectDatabase from "./config/database.js";

const connection = async (): Promise<void> => {
  await conectDatabase();

  app.listen(env.Port, () => {
    console.log(`App is running on Port: ${env.Port}`);
  });
};

connection();
