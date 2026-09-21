import express, { Request, Response } from "express";
import dotenv from "dotenv";
import shortenUrlRoutes from "./routes";
import { testConnection } from "./config/testConnection";
import { connectRedis } from "./config/redis";
import cors from "cors";


dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", shortenUrlRoutes);

app.get("/", (_req: Request, res: Response) => {
  return res.status(502).json({
    success: false,
    error: "Bad Gateway",
    message: "The root route is not available."
  });
});

app.get("/health", (req: Request, res: Response) => res.json({
  sucess : true,
  title : "URL Shortner API Health Check",
}));

const startServer = async () => {
  await testConnection();
  await connectRedis();

  app.listen(port, () => {
    console.log("Server Started");
  });
};

startServer();
