import "reflect-metadata";
import "./shared/container"
import express, { Request, Response, NextFunction } from "express"
import 'express-async-errors'
import cors from "cors";
import { AppError } from "./errors/AppError";
import { router } from './routes';
import 'dotenv/config'
import "./database"

const app = express();

app.use(cors(corsOptions))


const port = process.env.PORT;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}


app.use(express.json());

app.use(router)

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
  return res.status(err.statusCode).json({
status: "error",
message: err.message,
});

return res.status(500).json({
  status: "error",
  message: `Internal server error -> ${err.message}`,
});
});


app.listen(port, () => { console.log("Server rodando na porta: " + port) })

