import fs from "fs";
import { Request, Response, NextFunction } from "express";
import { ethers } from "ethers";
const rpcUrl = "https://cloudflare-eth.com";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
let etherscanProvider = new ethers.providers.EtherscanProvider();
import path from "path";

const addressData = fs.readFileSync(
  path.resolve(__dirname, "../../address.json"),
  "utf-8"
);

const getAddressTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const address = "0x747a9cfa64cd9d7889da0f187311d42b8181ab0a";
    const { address } = req.params;
    console.log(address);

    // const history = await (
    //   await etherscanProvider.getHistory(address)
    // ).map((item) => {
    //   const h = {
    //     ...item,
    //     gasPrice: item.gasPrice && ethers.utils.formatEther(item.gasPrice),
    //     value: ethers.utils.formatEther(item.value),
    //   };
    //   return h;
    // });

    return res.send(addressData);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

export default { getAddressTransactions };
