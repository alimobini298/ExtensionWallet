import { CoingeckoPlatform, NetworkNames } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import assetsInfoHandler from "@/providers/ethereum/libs/assets-handlers/assetinfo-mew";
import { EtherscanActivity } from "../libs/activity-handlers";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";
import shNFTHandler from "@/libs/nft-handlers/simplehash";

const ibcOptions: EvmNetworkOptions = {
  name: NetworkNames.IBC,
  name_long: "IBC",
  homePage: "https://ibcland.ir",
  blockExplorerTX: "https://explorer.ibcland.ir/tx/[[txHash]]",
  blockExplorerAddr: "https://explorer.ibcland.ir/address/[[address]]",
  chainID: "0x553",
  isTestNetwork: false,
  currencyName: "IBC",
  currencyNameLong: "IBC",
  node: "https://chain.ibcland.ir",
  icon: require("./icons/ibc.png"),
  coingeckoID: "ibc",
  coingeckoPlatform: CoingeckoPlatform.IBC,
  NFTHandler: shNFTHandler,
  assetsInfoHandler,
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const ibc = new EvmNetwork(ibcOptions);

export default ibc;
