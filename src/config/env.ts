import "dotenv/config"

const port = Number(process.env.Port)

if (!port) {
  throw new Error("Port is not define")
}

const mongoUri = process.env.Mongodb_Uri;

if (!mongoUri) {
  throw new Error("MongoDB Uri is not define")
}

export const env = {
  port,
  mongoUri
} as const;