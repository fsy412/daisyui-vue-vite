import { ethers } from "ethers"

const txnCheck = async (txnHash) => {
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  signer = provider.getSigner()
  let txn_test = await provider.getTransaction(txnHash)
  if (txn_test) {
    if (txn_test.blockNumber) {
      console.log("txn_test: ")
      console.log(txn_test)
      return txn_test
    }
  }
}

export { txnCheck }
