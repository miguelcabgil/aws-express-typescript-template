import express, {Router} from "express";
import {TestingController} from "../controllers/testing.controller";

const router: Router = express.Router();
const controller = new TestingController();

router.get("/testing", controller.get);
router.post("/testing", controller.create);

export const IndexRouter = router;
