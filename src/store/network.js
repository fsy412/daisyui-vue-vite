import { ethers } from "ethers"

export default {
  state() {
    return {
      account: "",
    }
  },
  actions: {
    connectNetwork({ state }) {
      const getInfo = async () => {
        const { ethereum } = window
        if (!ethereum) {
          alert("Must connect to MetaMask!")
          return
        }

        const provider = new ethers.providers.Web3Provider(ethereum)
        const { chainId } = await provider.getNetwork()

        // check network
        // if (chainId != CONFIG.ChainId) {
        //   ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [
        //       {
        //         chainId: `0x${Number(4002).toString(16)}`,
        //         rpcUrls: ["https://testnet.ftmscan.com"],
        //         chainName: "Fantom Testnet",
        //         nativeCurrency: {
        //           name: "FTM",
        //           symbol: "FTM",
        //           decimals: 18,
        //         },
        //         blockExplorerUrls: ["https://testnet.ftmscan.com/"],
        //       },
        //     ],
        //   });
        // }

        const account = (await ethereum.request({ method: "eth_requestAccounts" }))[0]
        state.account = account
        console.log("  chainId", chainId, account)
      }
      getInfo()
    },
  },
  mutations: {
    clearAccount(state) {
      console.log("clearAccount")
      state.account = ""
    },
  },
  getters: {
    account: (state) => state.account,
  },
}
