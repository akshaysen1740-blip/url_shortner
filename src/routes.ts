import { Router } from "express";
import { redirectUrl, shortUrl } from "./shortController";

const router = Router()

router.post("/short", shortUrl);
router.get("/:short_id", redirectUrl);

export default router;