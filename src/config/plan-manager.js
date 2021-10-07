const planManager = (address) =>
  Object.freeze({
    address: address,
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'protocols',
            type: 'address[]',
          },
          {
            indexed: false,
            internalType: 'uint256[]',
            name: 'amounts',
            type: 'uint256[]',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
        ],
        name: 'PlanUpdate',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_newMarkup',
            type: 'uint256',
          },
        ],
        name: 'adjustMarkup',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_newCorePercent',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_newArShieldPercent',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_newArShieldPlusPercent',
            type: 'uint256',
          },
        ],
        name: 'adjustPercents',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: '_shieldAddress',
            type: 'address[]',
          },
          {
            internalType: 'uint256[]',
            name: '_shieldType',
            type: 'uint256[]',
          },
        ],
        name: 'adjustShields',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_newMaster',
            type: 'address',
          },
        ],
        name: 'changeMaster',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_newPrice',
            type: 'uint256',
          },
        ],
        name: 'changePrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_armorMaster',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_planIndex',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
        ],
        name: 'planRedeemed',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_expiry',
            type: 'uint256',
          },
        ],
        name: 'updateExpireTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: '_protocols',
            type: 'address[]',
          },
          {
            internalType: 'uint256[]',
            name: '_coverAmounts',
            type: 'uint256[]',
          },
        ],
        name: 'updatePlan',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'arShieldCover',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'arShieldPercent',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '',
            type: 'address',
          },
        ],
        name: 'arShieldPlusCover',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'arShieldPlusPercent',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '',
            type: 'address',
          },
        ],
        name: 'arShields',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_hackTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'checkCoverage',
        outputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'check',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'coreCover',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'corePercent',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '_protocol',
            type: 'address',
          },
        ],
        name: 'coverageLeft',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '_user',
            type: 'address',
          },
        ],
        name: 'getCurrentPlan',
        outputs: [
          {
            internalType: 'uint256',
            name: 'idx',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'start',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'end',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_idx',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
        ],
        name: 'getProtocolPlan',
        outputs: [
          {
            internalType: 'uint256',
            name: 'idx',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'protocolId',
            type: 'uint64',
          },
          {
            internalType: 'uint192',
            name: 'amount',
            type: 'uint192',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'markup',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '',
            type: 'address',
          },
        ],
        name: 'nftCoverPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'plans',
        outputs: [
          {
            internalType: 'uint64',
            name: 'startTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'endTime',
            type: 'uint64',
          },
          {
            internalType: 'uint128',
            name: 'length',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        name: 'protocolPlan',
        outputs: [
          {
            internalType: 'uint64',
            name: 'protocolId',
            type: 'uint64',
          },
          {
            internalType: 'uint192',
            name: 'amount',
            type: 'uint192',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'totalUsedCover',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
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
            name: '_user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
        ],
        name: 'userCoverageLimit',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  })

export default planManager
