const arNXMVault = (address) =>
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
            internalType: 'uint256',
            name: 'nAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'arAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        name: 'Deposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reward',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'totalAum',
            type: 'uint256',
          },
        ],
        name: 'NxmReward',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'withdrawn',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'unstaked',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'staked',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'totalAum',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        name: 'Restake',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'SecondOwnershipTransferred',
        type: 'event',
      },
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
            internalType: 'uint256',
            name: 'arAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'nAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'requestTime',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'withdrawTime',
            type: 'uint256',
          },
        ],
        name: 'WithdrawRequested',
        type: 'event',
      },
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
            internalType: 'uint256',
            name: 'nAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'arAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        name: 'Withdrawal',
        type: 'event',
      },
      {
        inputs: [],
        name: '____deprecated____',
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
        name: 'adminPercent',
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
            name: '_from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'alertTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'arNxm',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_nAmount',
            type: 'uint256',
          },
        ],
        name: 'arNxmValue',
        outputs: [
          {
            internalType: 'uint256',
            name: 'arAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'aum',
        outputs: [
          {
            internalType: 'uint256',
            name: 'aumTotal',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'beneficiary',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'bucketSize',
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
            internalType: 'uint256',
            name: '_minNxm',
            type: 'uint256',
          },
        ],
        name: 'buyNxmWithEther',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_adminPercent',
            type: 'uint256',
          },
        ],
        name: 'changeAdminPercent',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_newBeneficiary',
            type: 'address',
          },
        ],
        name: 'changeBeneficiary',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_bucketSize',
            type: 'uint256',
          },
        ],
        name: 'changeBucketSize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_checkpointProtocol',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_startProtocol',
            type: 'uint256',
          },
        ],
        name: 'changeCheckpointAndStart',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_pauseDuration',
            type: 'uint256',
          },
        ],
        name: 'changePauseDuration',
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
            name: '_unstakePercents',
            type: 'uint256[]',
          },
          {
            internalType: 'address[]',
            name: '_removedProtocols',
            type: 'address[]',
          },
          {
            internalType: 'uint256',
            name: '_lastId',
            type: 'uint256',
          },
        ],
        name: 'changeProtocols',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_referPercent',
            type: 'uint256',
          },
        ],
        name: 'changeReferPercent',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_reserveAmount',
            type: 'uint256',
          },
        ],
        name: 'changeReserveAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_restakePeriod',
            type: 'uint256',
          },
        ],
        name: 'changeRestakePeriod',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_rewardDuration',
            type: 'uint256',
          },
        ],
        name: 'changeRewardDuration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_withdrawDelay',
            type: 'uint256',
          },
        ],
        name: 'changeWithdrawDelay',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_withdrawFee',
            type: 'uint256',
          },
        ],
        name: 'changeWithdrawFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'checkpointProtocol',
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
        name: 'currentReward',
        outputs: [
          {
            internalType: 'uint256',
            name: 'reward',
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
            name: '_nAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: '_referrer',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: '_isNxm',
            type: 'bool',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getRewardNxm',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_shieldMining',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_protocol',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_sponsor',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_token',
            type: 'address',
          },
        ],
        name: 'getShieldMiningRewards',
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
            internalType: 'address',
            name: '_wNxm',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_arNxm',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_nxm',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_nxmMaster',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_rewardManager',
            type: 'address',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isOwner',
        outputs: [
          {
            internalType: 'bool',
            name: '',
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
        name: 'lastCall',
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
        name: 'lastRestake',
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
        name: 'lastReward',
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
        name: 'lastRewardTimestamp',
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
        name: 'nxm',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nxmMaster',
        outputs: [
          {
            internalType: 'contract INxmMaster',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_arAmount',
            type: 'uint256',
          },
        ],
        name: 'nxmValue',
        outputs: [
          {
            internalType: 'uint256',
            name: 'nAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_lastId',
            type: 'uint256',
          },
        ],
        name: 'ownerRestake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'pauseDuration',
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
            internalType: 'uint256',
            name: '_claimId',
            type: 'uint256',
          },
        ],
        name: 'pauseWithdrawals',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'protocols',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'receiveOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'receiveSecondOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'referPercent',
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
        name: 'referrers',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
        ],
        name: 'rescueToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'reserveAmount',
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
            internalType: 'uint256',
            name: '_lastId',
            type: 'uint256',
          },
        ],
        name: 'restake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'restakePeriod',
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
        name: 'rewardDuration',
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
        name: 'rewardManager',
        outputs: [
          {
            internalType: 'contract IRewardManager',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'secondOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
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
            name: '_stakeAmounts',
            type: 'uint256[]',
          },
        ],
        name: 'stakeNxmManual',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'stakedNxm',
        outputs: [
          {
            internalType: 'uint256',
            name: 'staked',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'startProtocol',
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
        name: 'totalPending',
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
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferSecondOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'unstakePercents',
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
        name: 'unwrapWnxm',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'wNxm',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_arAmount',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: '_payFee',
            type: 'bool',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'withdrawDelay',
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
        name: 'withdrawFee',
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
        name: 'withdrawFinalize',
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
        name: 'withdrawals',
        outputs: [
          {
            internalType: 'uint48',
            name: 'requestTime',
            type: 'uint48',
          },
          {
            internalType: 'uint104',
            name: 'nAmount',
            type: 'uint104',
          },
          {
            internalType: 'uint104',
            name: 'arAmount',
            type: 'uint104',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'withdrawalsPaused',
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

export default arNXMVault
