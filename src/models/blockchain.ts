type Transaction = {
  hash: string;
  confirmations: number;
  from: string;
  gasPrice: number;
  to: string;
  value: number;
  timestamp: number;
};

export type Address = {
  hash: string;
  balance: number;
  transactions: Transaction[];
};

export type Block = {
  number: number;
  timestamp: number;
  miner: string;
  transactions: string[];
};

export type BlockWithTransactions = Block & {
  transactions: Transaction[];
};

export type BlockchainData = {
  blocks: Block[];
};
