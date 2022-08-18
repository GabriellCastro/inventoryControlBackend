import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import * as Yup from "yup";
import { AppError } from "./errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  if (err instanceof Yup.ValidationError) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: "Internal server error",
  });
});

app.get("/", (_, res) => {
  res.json({ ok: true });
});

export { app };
