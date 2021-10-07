import { logoMapper } from '../helpers'
require('dotenv').config()
const {
  REACT_APP_BACKEND_URL,
  REACT_APP_PROVIDER,
  DEEPL_API_KEY,
  BLOCKNATIVE_API_KEY,
  REACT_APP_NEXUS_MUTUAL_KEY,
} = process.env

export default {
  // GENERAL
  BACKEND_URL: REACT_APP_BACKEND_URL,
  GAS_PRICE_API: 'https://gasprice.poa.network/',
  NEXUS_MUTUAL_API: 'https://api.nexusmutual.io/',
  PROVIDER: REACT_APP_PROVIDER,
  DEEPL_API_KEY: DEEPL_API_KEY,
  BLOCKNATIVE_API_KEY: BLOCKNATIVE_API_KEY,
  NEXUS_MUTUAL_KEY: REACT_APP_NEXUS_MUTUAL_KEY,

  // CONTRACTS
  ARNFT_ADDRESS: '0x1337DEF1e9c7645352D93baf0b789D04562b4185',
  ARNFT_V1_ADDRESS: '0x57318DAF32E1F208Fb84AF5413C4185b8F66104d',
  ARNFT_V2_ADDRESS: '0x1337DEF1e9c7645352D93baf0b789D04562b4185',
  ARMOR_MASTER_ADDRESS: '0x1337def1900ceaabf5361c3df6af653d814c6348',
  //ARMOR_TOKEN_ADDRESS: '0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a',
  ARMOR_TOKEN_ADDRESS: '0x1337def16f9b486faed0293eb623dc8395dfe46a',
  BALANCE_MANAGER_ADDRESS: '0x1337DEF1c5EbBd9840E6B25C4438E829555395AA',
  CLAIM_MANAGER_ADDRESS: '0x1337DEF1fdfDd82BA18083Fd0627d4ADb6CdC357',
  PLAN_MANAGER_ADDRESS: '0x1337DEF1373bB63196F3D1443cE11D8d962543bB',
  REWARD_MANAGER_ADDRESS: '0x1337DEF17d00FEAeA1fb10E09cAfa56030349Af8',
  STAKE_MANAGER_ADDRESS: '0x1337DEF1670C54B2a70E590B5654c2B7cE1141a2',
  ERC20_ADDRESS: '0x1e4D73d504814FC8C98E1fAC70564d4974B68C32',
  YINSURE_ADDRESS: '0x181Aea6936B407514ebFC0754A37704eB8d98F91',
  QUOTATION_ADDRESS: '0x1776651F58a17a50098d31ba3C3cD259C1903f7A',
  RARIBLE_ADDRESS: '0x131aebbfe55bca0c9eaad4ea24d386c5c082dd58',
  ARNXM_VAULT_ADDRESS: '0x1337DEF1FC06783D4b03CB8C1Bf3EBf7D0593FC4',
  WNXM_TOKEN_ADDRESS: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
  ARNXM_TOKEN_ADDRESS: '0x1337DEF18C680aF1f9f45cBcab6309562975b1dD',
  NXM_TOKEN_ADDRESS: '0xd7c49CEE7E9188cCa6AD8FF264C1DA2e69D4Cf3B',
  REFERRAL_REWARDS_ADDRESS: '0x1337DEF1C79053dA23921a3634aDbD12f3b748A5',
  UTILIZATION_FARM_BORROWERS_ADDRESS:
    '0x1337DEF172152f2fF82d9545Fd6f79fE38dF15ce',
  UTILIZATION_FARM_STAKERS_ADDRESS:
    '0x1337DEF1B1Ae35314b40e5A4b70e216A499b0E37',
  NEXUS_MUTUAL_STAKING_ADDRESS: '0x84edffa16bb0b9ab1163abb0a13ff0744c11272f',

  // ArShields
  ARSHIELDS_MASTER_ADDRESS: '0x9501047E38b61344f8dDDC3ECcA399feC7fB20B3',
  ARSHIELDS_CONTROLLER_ADDRESS: '0x1337DEF131Dc32B6417B392b6c7047b99E702f7c',
  ARSHIELDS_ORACLE_ADDRESS: '0x27e96f18904c1CF086E05EE0E68dE90be0B2ACFF',
  ARSHIELDS_COVERAGE_BASE_ADDRESS: '0xf055f20669D40ce9D1425Befef17014602645c83',

  // UNI LPs
  ARMOR_ETH_UNI_FARM_ADDRESS: '0xf991f1e1b8acd657661c89b5cd452d86de76a8c1',
  ARMOR_ETH_UNI_TOKEN_ADDRESS: '0x648450d9C30B73E2229303026107a1f7eB639f6c',
  ARMOR_WBTC_UNI_FARM_ADDRESS: '0x01Acad2228F18598CD2b8611aCD37992BF27313C',
  ARMOR_WBTC_UNI_TOKEN_ADDRESS: '0x888759CB22cEDaDF2cFb0049b03309D45aa380D9',
  ARMOR_DAI_UNI_FARM_ADDRESS: '0xa659e66E116D354e779D8dbb35319AF67171ffb4',
  ARMOR_DAI_UNI_TOKEN_ADDRESS: '0xfc0DD985f6dE9C2322EBd97c3422b0857c4d78c7',
  ARNXM_ETH_UNI_FARM_ADDRESS: '0x24ae7bdf4a9dee4d409503ffcfd5bc694e2c8a12',
  ARNXM_ETH_UNI_TOKEN_ADDRESS: '0x7CA51456b20697A0E5Be65e5AEb65dfE90f21150',
  ARNXM_WNXM_UNI_TOKEN_ADDRESS: '0x3698067224F92b99E29a54e7aB6868EA113C5af2',
  ARNXM_WNXM_UNI_FARM_ADDRESS: '0x40996bFF03bEe49BbcE8DCB234eBD9aFD723AbB0',
  ARNXM_ARMOR_UNI_FARM_ADDRESS: '0xa9c94d0dd4338c841c82b1cfeccd6b2c57d800a9',
  ARNXM_ARMOR_UNI_TOKEN_ADDRESS: '0x8B097568174684a22e6055cF48DBdA41c1E7Abf5',

  // SUSHI LPs
  ARMOR_WBTC_SUSHI_FARM_ADDRESS: '0x88aACE19997656F4eB1b8D3729226A4F97Ca6b2c',
  ARMOR_WBTC_SUSHI_TOKEN_ADDRESS: '0xCd83cADa168c389FB5221e2cC961e6A56163176a',
  ARMOR_ETH_SUSHI_FARM_ADDRESS: '0x1b39d7f818aaf0318f6d0a66cd388c20c15fea94',
  ARMOR_ETH_SUSHI_TOKEN_ADDRESS: '0x17A2194D55f52Fd0C711e0e42B41975494bb109B',
  ARMOR_DAI_SUSHI_FARM_ADDRESS: '0x4529AAA39DE655c8B4715DEa8b1dACEbbA255C74',
  ARMOR_DAI_SUSHI_TOKEN_ADDRESS: '0x5a06bD8702F06B4F21382e8A87b1aB99a46b8768',
  ARNXM_ETH_SUSHI_FARM_ADDRESS: '0xcd1f8cda8be6a8c306a5b0ee759bad46a6f60cad',
  ARNXM_ETH_SUSHI_TOKEN_ADDRESS: '0x43632E3448cd47440fEE797258081414D91A58cE',
  ARNXM_WNXM_SUSHI_TOKEN_ADDRESS: '0xc7DC1DCe3A859c315C1d3879637DacE63d12AeAc',
  ARNXM_WNXM_SUSHI_FARM_ADDRESS: '0xfE34bc5b271E704aA2a4AEB71b2332C8DCDA80cE',

  // 1INCH LPs
  ARMOR_WBTC_1INCH_FARM_ADDRESS: '0x8C7442Bd71A1464f50efb216407B59584a2bcfF5',
  ARMOR_WBTC_1INCH_TOKEN_ADDRESS: '0xB2abbc8824e92a0aC8D484dCa870Bedf37866263',
  ARMOR_ETH_1INCH_FARM_ADDRESS: '0xfDF5709D44b26A7DD112556Dd1B1cE53c0eAF454',
  ARMOR_ETH_1INCH_TOKEN_ADDRESS: '0x0e1953F27e64Ea9DAD34EA1B43231A12E14e60CC',
  ARMOR_DAI_1INCH_FARM_ADDRESS: '0xD7b8Ef47C08F824ceA3d837afA61484e81d14BfB',
  ARMOR_DAI_1INCH_TOKEN_ADDRESS: '0x01a11a5A999E57E1B177AA2fF7fEA957605adA2b',
  ARNXM_ETH_1INCH_FARM_ADDRESS: '0x07aFD11985bFcAA8016eEb9b00534c0B3A70CCaC',
  ARNXM_ETH_1INCH_TOKEN_ADDRESS: '0x70967E8D2873CCcD14C0319FC01742228EdcC597',

  // BALANCER LPs
  ARNXM_ETH_BAL_FARM_ADDRESS: '0x008F3DDE2Ed44BdC72800108d8309D16d55d6dD5',
  ARNXM_ETH_BAL_TOKEN_ADDRESS: '0xDb942c0851774bD817E6f4813F1FA64CCe6fe25F',
  ARMOR_ETH_BAL_FARM_ADDRESS: '0x2a088ab58696fcd20a84fd8c75294d520aa535ff',
  ARMOR_ETH_BAL_TOKEN_ADDRESS: '0x7c9ba7c47314c9129e66403d93012445ec5f4a33',
  ARMOR_DAI_BAL_FARM_ADDRESS: '0x148ac62a238a71D7fb8A5bA093B8BADF4DCc7DCC',
  ARMOR_DAI_BAL_TOKEN_ADDRESS: '0x14C6F9F0cCbB990c6517B17e3e79a39E0a27f27E',

  // IBCO
  IBCO_ADDRESS: '0x50C936FA3cCc3B9B76b5Db76950b8CA073FcA5F6',
  IBCO_BASE_DATE: '2020-11-01T00:00:00+00',
  IBCO_START_DATE: '2020-11-20T00:00:00+00',
  IBCO_END_DATE: '2021-12-20T00:00:00+00',

  DUMMY_ENV: 'mainnet-config',

  SHIELDS: {
    Yearn: {
      config: {
        coverageBaseAddress: '0x1337DEF184ea282B77f2CD162238b1C27D976CDe',
        oracleAddress: '0x1337DEF1D6732E95F881ff41A7dDE1670A06B4d5',
        holdingsDecimalPlaces: 2,
        underlyingTokenDecimalPlaces: 3,
      },
      shields: {
        yvDai: {
          logo: logoMapper('Dai'),
          shieldAddress: '0xb8FC81379E04a38462E1a4618f4f77ff5488E3dD',
          underlyingTokenAddress: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
          armorTokenAddress: '0x7c50A85BEd0A9a61C946487b603Bd266420dAE18',
        },
        yvSNX: {
          logo: logoMapper('Synthetix'),
          shieldAddress: '0xBdB4D10997185ed3CbD8a56f6F65A30d58a01384',
          underlyingTokenAddress: '0xF29AE508698bDeF169B89834F76704C3B205aedf',
          armorTokenAddress: '0x4c2F3e16B96351b2ec5B5154539641874433f395',
        },
        yvsUSD: {
          logo: logoMapper('USD'),
          shieldAddress: '0x97cdf2eBB98e5CC6df46720f1B2046A72cf1a490',
          underlyingTokenAddress: '0xa5cA62D95D24A4a350983D5B8ac4EB8638887396',
          armorTokenAddress: '0xb2c6f15D0914abd454A0f85dFeE3644ce391d893',
        },
        yvYFI: {
          logo: logoMapper('YFI'),
          shieldAddress: '0xCC91ECCaD007CE4c26dbA3872276E0E44aEaE22f',
          underlyingTokenAddress: '0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1',
          armorTokenAddress: '0x811614dAAc8f37EDf25a86F3bDE774B1e886ccF5',
        },
        yv1INCH: {
          logo: logoMapper('1Inch'),
          shieldAddress: '0xB5c0Eeaf86f43a5890600f37F19934F092a975CA',
          underlyingTokenAddress: '0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67',
          armorTokenAddress: '0x9c868b4bE885F7716820104B4C76C2c1CCB8908C',
        },
      },
    },
  },
}