import express from "express";
import controller from "../controllers/addressTransactions";
const router = express.Router();

router.get("/:address", controller.getAddressTransactions);

export = router;
