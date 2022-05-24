import express, {Express} from "express";

export const Middlewares = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
};
