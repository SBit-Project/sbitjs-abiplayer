import { IDeployedContractInfo } from "sbitjs"

export interface IContractsInventory {
  contracts: { [key: string]: IDeployedContractInfo }
}
