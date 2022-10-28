import { Request, Response } from "express";
import { ethers } from "ethers";
import fs from "fs";
const rpcUrl = "https://cloudflare-eth.com";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
// let etherscanProvider = new ethers.providers.EtherscanProvider();
import path from "path";

const blocks = fs.readFileSync(
  path.resolve(__dirname, "../../blocks.json"),
  "utf-8"
);

const getLastBlocks = async (count: number) => {
  const lastBlockNumber = await provider.getBlockNumber();
  const lastBlocks = [];
  const limit = lastBlockNumber - count;
  for (let i = lastBlockNumber; i > limit; i--) {
    let block;
    if (i === lastBlockNumber) {
      block = await provider.getBlockWithTransactions(lastBlockNumber);
    } else {
      block = await provider.getBlock(i);
    }
    lastBlocks.push(block);
  }
  return lastBlocks;
};

const getBlockchainData = async (req: Request, res: Response) => {
  try {
    return res.send(blocks);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

export default { getBlockchainData };
