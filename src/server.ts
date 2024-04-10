import excpress from "express";
import dotenv from "dotenv";
import https from "https";
import { readFileSync } from "fs";
import { router } from "./routes/routes";
import mongoose from "mongoose";

dotenv.config();

const app = excpress();
const port = process.env.PORT || 3000;
const sslKey = process.env.SSL_KEY;
const sslCert = process.env.CERT_KEY;
const mongoUrl = process.env.MONGO_URL;
const options = {
  key: readFileSync(sslKey),
  cert: readFileSync(sslCert),
};

const server = https.createServer(options, app);
app.use(excpress.json());
app.use("/api", router);
const startServer = async () => {
  try {
    await mongoose.connect(mongoUrl);
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    server.on("error", (error) => {
      console.error(error);
    });
    return app;
  } catch (error) {
    console.error(error);
  }
};
startServer();
