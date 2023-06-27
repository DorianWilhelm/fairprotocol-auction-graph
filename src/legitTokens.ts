export class LegitTokens {
	chainId: i32;
	usdc: string;
	usdt: string;
	dai: string;
	weth: string;

	constructor(chainId: i32) {
		this.chainId = chainId;
		this.usdc = "";
		this.usdt = "";
		this.dai = "";
		this.weth = "";
	}

	setUsdc(usdc: string): void {
		this.usdc = usdc;
	}

	setUsdt(usdt: string): void {
		this.usdt = usdt;
	}

	setDai(dai: string): void {
		this.dai = dai;
	}

	setWeth(weth: string): void {
		this.weth = weth;
	}
}

/**
 * USDC - https://developers.circle.com/developer/docs/supported-chains-and-currencies
 * USDT - https://www.coingecko.com/en/coins/tether
 * DAI - https://www.coingecko.com/en/coins/dai
 */

export let legitTokens: Map<i32, LegitTokens> = new Map();

// Mainnet
let mainnetTokens = new LegitTokens(1);
mainnetTokens.setDai("0x6b175474e89094c44da98b954eedeac495271d0f");
mainnetTokens.setUsdc("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
mainnetTokens.setUsdt("0xdac17f958d2ee523a2206206994597c13d831ec7");
mainnetTokens.setWeth("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
legitTokens.set(1, mainnetTokens);

// Goerli
let goerliTokens = new LegitTokens(5);
goerliTokens.setDai("0xdc31ee1784292379fbb2964b3b9c4124d8f89c60");
goerliTokens.setUsdc("0x07865c6e87b9f70255377e024ace6630c1eaa37f");
goerliTokens.setUsdt("0x509ee0d083ddf8ac028f2a56731412edd63223b9");
goerliTokens.setWeth("0x0Bb7509324cE409F7bbC4b701f932eAca9736AB7");
legitTokens.set(5, goerliTokens);

// Gnosis
let gnosisTokens = new LegitTokens(100);
gnosisTokens.setDai("0x44fa8e6f47987339850636f88629646662444217");
gnosisTokens.setUsdc("0xddafbb505ad214d7b80b1f830fccc89b60fb7a83");
gnosisTokens.setUsdt("0x4ecaba5870353805a9f068101a40e0f32ed605c6");
gnosisTokens.setWeth("0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1");
legitTokens.set(100, gnosisTokens);

// Matic Mumbai
let maticMumbaiTokens = new LegitTokens(80001);
maticMumbaiTokens.setDai("0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253");
maticMumbaiTokens.setUsdc("0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747");
maticMumbaiTokens.setUsdt("0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832");
maticMumbaiTokens.setWeth("0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa");
legitTokens.set(80001, maticMumbaiTokens);


// Polygon Mainnet
let polygonMainnetTokens = new LegitTokens(137);
polygonMainnetTokens.setDai("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063");
polygonMainnetTokens.setUsdc("0x2791bca1f2de4661ed88a30c99a7a9449aa84174");
polygonMainnetTokens.setUsdt("0xc2132d05d31c914a87c6611c10748aeb04b58e8f");
polygonMainnetTokens.setWeth("0x7ceb23fd6bc0add59e62ac25578270cff1b9f619");
legitTokens.set(137, polygonMainnetTokens);

// Binanace Smart Chain
let bscTokens = new LegitTokens(56);
bscTokens.setDai("0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3");
bscTokens.setUsdc("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d");
bscTokens.setUsdt("0x55d398326f99059ff775485246999027b3197955");
bscTokens.setWeth("0x55d398326f99059ff775485246999027b3197955");
legitTokens.set(56, bscTokens);

// Binance Smart Chain Testnet
let bscTestnetTokens = new LegitTokens(97);
bscTestnetTokens.setDai("0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867");
bscTestnetTokens.setUsdc("0x64544969ed7EBf5f083679233325356EbE738930");
bscTestnetTokens.setUsdt("0x337610d27c682E347C9cD60BD4b3b107C9d34dDd");
bscTestnetTokens.setWeth("0x2A416168ceA12820E288d36f77C1b7f936F4e228");
legitTokens.set(97, bscTestnetTokens);

// Avalanche Fuji Testnet
let fujiTokens = new LegitTokens(43113);
fujiTokens.setDai("0x12C135a68b7B3Cd006eDb785cB53398a5DA59613");
fujiTokens.setUsdc("0xAF82969ECF299c1f1Bb5e1D12dDAcc9027431160");
fujiTokens.setUsdt("0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643");
fujiTokens.setWeth("0xB767287A7143759f294CfB7b1Adbca1140F3de71");
legitTokens.set(43113, fujiTokens);

// Avalanche C-Chain
let avalancheTokens = new LegitTokens(43114)
avalancheTokens.setDai("0xd586e7f844cea2f87f50152665bcbc2c279d8d70");
avalancheTokens.setUsdc("0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e");
avalancheTokens.setUsdt("0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7");
avalancheTokens.setWeth("0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab");
legitTokens.set(43114, avalancheTokens);

// Sepolia
let sepoliaTokens = new LegitTokens(11155111);
sepoliaTokens.setDai("0x53844F9577C2334e541Aec7Df7174ECe5dF1fCf0");
sepoliaTokens.setUsdc("");
sepoliaTokens.setUsdt("0x7169D38820dfd117C3FA1f22a697dBA58d90BA06");
sepoliaTokens.setWeth("0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9");
legitTokens.set(11155111, sepoliaTokens);

// Arbitrum One
let arbitrumTokens = new LegitTokens(42161);
arbitrumTokens.setDai("0xda10009cbd5d07dd0cecc66161fc93d7c9000da1");
arbitrumTokens.setUsdc("0xaf88d065e77c8cc2239327c5edb3a432268e5831");
arbitrumTokens.setUsdt("0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9");
arbitrumTokens.setWeth("0x82af49447d8a07e3bd95bd0d56f35241523fbab1");
legitTokens.set(42161, arbitrumTokens);

export function getTokenList(index: i32): LegitTokens | null {
	if (legitTokens.has(index)) {
		return legitTokens.get(index);
	}
	return null;
}
