import config from "../config"

function getERC20Address(symbol, chainId) {
  return config.TokenList[chainId][symbol]
}

function getExchangeAddress(chainId) {
  return config.Exchange[chainId]
}

export { getERC20Address, getExchangeAddress }
