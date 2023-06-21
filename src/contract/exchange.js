import { ethers } from "ethers"
import abi from "../abi/Exchange"

function getExchangeContract(address) {
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const exchangeContract = new ethers.Contract(address, abi, signer)
  return exchangeContract
}

export default getExchangeContract
