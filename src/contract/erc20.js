import { ethers } from "ethers"
import abi from "../abi/FaucetToken.json"

function getERC20Contract(erc20Address) {
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(erc20Address, abi, signer)
  return contract
}

export default getERC20Contract
