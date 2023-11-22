import express from "express";
import { router } from "./routes/routes";
export const app = express();
app.get("/", router);
app.get("/coffeelover", router);
app.get("/coffee", router);
