import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";

const appServer = express();
appServer.use(logger("dev"));
appServer.use(express.json());
appServer.use(cookieParser());

appServer.use((req: Request, res: Response, next: NextFunction) => {
  createError(404);
});

export default appServer;
