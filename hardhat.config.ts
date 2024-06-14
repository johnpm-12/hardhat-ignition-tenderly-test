import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    tenderlyBaseSameId: {
      url: "https://virtual.base.rpc.tenderly.co/b6d3821c-580c-4340-98e2-ad6ada9141e2",
      chainId: 8453,
      ignition: {
        maxFeePerGasLimit: 10000000000n,
        maxPriorityFeePerGas: 0n,
      },
    },
    tenderlyBaseUniqueId: {
      url: "https://virtual.base.rpc.tenderly.co/d4ebc2f9-6ed9-4ffe-9dfa-fb16c1858db8",
      chainId: 845312312314,
      ignition: {
        maxFeePerGasLimit: 10000000000n,
        maxPriorityFeePerGas: 0n,
      },
    },
  },
};

export default config;
