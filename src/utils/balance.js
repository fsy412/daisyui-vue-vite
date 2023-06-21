import getERC20Contract from "../contract/erc20"
import getExchangeContract from "../contract/exchange"
import { getERC20Address, getExchangeAddress } from "../utils/address"

async function getWalletBalance(account, symbol, chainId) {
  // console.log("getWalletBalance", account, symbol, chainId)
  const erc20 = getERC20Contract(getERC20Address(symbol, chainId))
  let balance = await erc20.balanceOf(account)
  return balance
}

async function getExchangeBalance(account, symbol, chainId) {
  const exchangeContract = getExchangeContract()
}

async function getQuoteAllowance(account, symbol, chainId) {
  console.log("getQuoteAllowance", symbol, "account", account, "spender", getExchangeAddress(chainId))
  const erc20 = getERC20Contract(getERC20Address("USDT", chainId))
  const allowance = await erc20.allowance(account, getExchangeAddress(chainId))
  return allowance
}

export { getWalletBalance, getExchangeBalance, getQuoteAllowance }
