import { NetworkNames } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "./evm-network";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";

export interface CustomEvmNetworkOptions {
  name: string;
  name_long: string;
  chainID: `0x${string}`;
  currencyName: string;
  currencyNameLong: string;
  node: string;
  blockExplorerAddr?: string;
  blockExplorerTX?: string;
}

export class CustomEvmNetwork extends EvmNetwork {
  public isCustomNetwork = true;

  constructor(options: CustomEvmNetworkOptions) {
    const networkName = options.name as NetworkNames;

    const evmNetworkOptions: EvmNetworkOptions = {
      ...options,
      icon: require("../networks/icons/eth.svg"),
      activityHandler: wrapActivityHandler(() => Promise.resolve([])),
      blockExplorerAddr: options.blockExplorerAddr ?? "https://ibcland.ir/",
      blockExplorerTX: options.blockExplorerTX ?? "https://ibcland.ir/",
      homePage: "https://ibcland.ir/",
      isTestNetwork: false,
      name: networkName,
    };
    super(evmNetworkOptions);
  }
}
