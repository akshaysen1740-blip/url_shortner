import { Request, Response } from "express";
import { pool } from "./config/db";
import { nanoid } from "nanoid";
import { redisClient } from "./config/redis";

export const shortUrl = async (req: Request, res: Response) => {
  const { originalUrl } = req.body; 
  const short_id = nanoid(6);
  const [data] = await pool.execute(
    `INSERT INTO master_urls (short_id, url) VALUES (?, ?)`,
    [short_id, originalUrl],
  );
  console.log("data inserted", data);
  res.send({
    success: true,
    short_url: `${process.env.BASE_URL}${short_id}`,
  });
};

export const redirectUrl = async (req: Request, res: Response) => {
  const { short_id } = req.params;
  console.log("short_id", short_id)
  // Redis Chache check
  const cachedUrl = await redisClient.get(short_id as string);
  if (cachedUrl) {
    console.log("✅ Cache HIT");
    return res.redirect(cachedUrl);
  }
  const [data]: any[] = await pool.execute(
    `SELECT * FROM master_urls where short_id = ?`,
    [short_id],
  );

  if (data.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Short URL not found",
    });
  }

  redisClient.set(short_id as string, data[0].url, {
    EX: 60 * 60 * 24,
  });
  console.log("Redirect", data[0].url)
  res.redirect(data[0].url);
};
