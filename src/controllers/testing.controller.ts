import {Request, Response} from "express";

export class TestingController {
    public async get(_: Request, res :Response): Promise<void> {
        try {
            res.status(200).json({
                data: {
                    message: `GET ${process.env.ENDPOINT} endpoint working correctly`
                }
            });
        } catch (e: any) {
            res.status(500).json({
                data: {
                    error: e?.message,
                }
            });
        }
    }

    public async create(_: Request, res :Response): Promise<void> {
        try {
            res.status(200).json({
                data: {
                    message: `POST endpoint working correctly`
                }
            });
        } catch (e: any) {
            res.status(500).json({
                data: {
                    error: e?.message,
                }
            });
        }
    }
}
