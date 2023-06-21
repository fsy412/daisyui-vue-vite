import { ethers } from "ethers"

export default {
  state() {
    return {
      account: "",
      chainId: 0,
      signer: null,
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
        const signer = provider.getSigner()

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
        state.chainId = chainId
        state.signer = signer
        console.log("  chainId", chainId, account)
      }
      getInfo()
    },
  },
  mutations: {
    clearAccount(state) {
      state.account = ""
    },
  },
  getters: {
    account: (state) => state.account,
    chainId: (state) => state.chainId,
    signer: (state) => state.signer,
  },
}
