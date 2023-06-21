import { ethers } from "ethers"
import abi from "../abi/Exchange"

function getExchangeContract(address) {
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const exchangeContract = new ethers.Contract("0x23233dBeBF1019e3e0f47aC37B3B458F56cd499E", abi, signer)
  return exchangeContract
}

export default getExchangeContract
