import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // stayed signed in for a year
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    // Add Data seeding here
  },
  lists: createSchema({
    // Schema Items Code
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});
