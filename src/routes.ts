import {Express} from "express";
import {IndexRouter} from "./routers";

export const Routes = (app: Express) => {
    app.use('/', IndexRouter);
}