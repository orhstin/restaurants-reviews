import app from "./server.js";
import mongodb, { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Setup MongoClient instance
const mongoClient = mongodb.MongoClient;

//Access env
const port = process.env.PORT || 8000;

// Setup connection
mongoClient
  .connect(process.env.RESTREVIEWS_DB_URI, {
    // setup pool
    // Max 50 connections
    maxPoolSize: 50,
    // Timeout after 2500 ms
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .catch((err) => {
    // Catch error
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // Listen port
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
