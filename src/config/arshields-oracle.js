const arShieldsOracle = (address) =>
  Object.freeze({
    address: address,
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_ethOwed',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_uTokenLink',
            type: 'address',
          },
        ],
        name: 'ethToU',
        outputs: [
          {
            internalType: 'uint256',
            name: 'uOwed',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_tokensOwed',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_yToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_uTokenLink',
            type: 'address',
          },
        ],
        name: 'getEthOwed',
        outputs: [
          {
            internalType: 'uint256',
            name: 'ethOwed',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_ethOwed',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_yToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_uTokenLink',
            type: 'address',
          },
        ],
        name: 'getTokensOwed',
        outputs: [
          {
            internalType: 'uint256',
            name: 'yOwed',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_yToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_uOwed',
            type: 'uint256',
          },
        ],
        name: 'uToY',
        outputs: [
          {
            internalType: 'uint256',
            name: 'yOwed',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  })

export default arShieldsOracle
