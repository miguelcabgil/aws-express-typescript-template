import serverlessHttp from 'serverless-http';
import express from "express";
import {Middlewares} from "./middlewares";
import {Routes} from "./routes";

const app = express();

Middlewares(app);
Routes(app);

export const handler = serverlessHttp(app);
