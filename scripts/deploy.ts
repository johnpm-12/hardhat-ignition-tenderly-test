import { ignition, network } from "hardhat";

import LockModule from "../ignition/modules/Lock";

async function main() {
  const accounts = (await network.provider.request({
    method: "eth_accounts",
  })) as `0x${string}`[];
  await network.provider.request({
    method: "tenderly_setBalance",
    params: [[accounts[0]], "0xDE0B6B3A7640000"],
  });

  const { lock } = await ignition.deploy(LockModule, {
    config: { requiredConfirmations: 1 },
  });

  console.log(await lock.read.unlockTime());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
