import getERC20Contract from "../contract/erc20"
import getExchangeContract from "../contract/exchange"
import { getERC20Address } from "../utils/address"

async function getWalletBalance(account, symbol, chainId) {
  // console.log("getWalletBalance", account, symbol, chainId)
  const erc20 = getERC20Contract(getERC20Address(symbol, chainId))
  let balance = await erc20.balanceOf(account)
  return balance
}

async function getExchangeBalance(account, symbol, chainId) {
  const exchangeContract = getExchangeContract()
}

export { getWalletBalance, getExchangeBalance }
