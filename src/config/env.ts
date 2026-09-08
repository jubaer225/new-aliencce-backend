import "dotenv/config";

const Port = Number(process.env.Port);

if (!Port) {
  throw new Error("Port is not define")
}

const mongoUri = process.env.Mongodb_Uri

if(!mongoUri) {
  throw new Error("mongo_uri is not define")
}

export const env = {
  Port,
  mongoUri
} as const;