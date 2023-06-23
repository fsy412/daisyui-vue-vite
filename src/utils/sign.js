async function getPermitSignature(signer, singerAddress, token, spender, value, deadline) {
  const [nonce, name, version, chainId] = await Promise.all([token.nonces(singerAddress), token.name(), "1", signer.getChainId()])

  let ret = await signer._signTypedData(
    {
      name,
      version,
      chainId,
      verifyingContract: token.address,
    },
    {
      Permit: [
        {
          name: "owner",
          type: "address",
        },
        {
          name: "spender",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
        {
          name: "nonce",
          type: "uint256",
        },
        {
          name: "deadline",
          type: "uint256",
        },
      ],
    },
    {
      owner: singerAddress,
      spender,
      value,
      nonce,
      deadline,
    },
  )
  const signature = ret.substring(2)
  const r = "0x" + signature.substring(0, 64)
  const s = "0x" + signature.substring(64, 128)
  const v = parseInt(signature.substring(128, 130), 16)

  return { r, s, v }
}

export { getPermitSignature }
