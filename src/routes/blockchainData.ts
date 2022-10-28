import express from "express";
import controller from "../controllers/blockchainData";
const router = express.Router();

router.get("/", controller.getBlockchainData);

export = router;
