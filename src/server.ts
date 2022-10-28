import express from "express";
import morgan from "morgan";
import blockchainDataRoutes from "./routes/blockchainData";
import transactionsRoutes from "./routes/transactions";

const app = express();

app.use(morgan("dev"));
app.use("/blockchain-data", blockchainDataRoutes);
app.use("/transactions", transactionsRoutes);

app.listen(5005, () => console.log("listening port 5005"));
